import React, {ChangeEvent, useEffect, useState} from 'react';
import '../Cards/card.scss'
import './genres.scss'
import {fetchGenres, fetchSearch} from "../../api";
import {RouteComponentProps, withRouter} from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {Genre, Search as SearchData} from "../../types/data";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {addGenresAction} from "../../redux/actions";

const GenreList = (props: RouteComponentProps) => {

    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const genres = useSelector((state: RootState) => state.genres).genres;
    const [result, setResult] = useState([] as Array<Genre>);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        genres.length == 0 ? fetchGenres().then(result => {
            dispatch(addGenresAction(result.genres));
            setLoading(false);
            setResult(result.genres)
        }) : (() => {setLoading(false); setResult(genres)})();
    }, []);

    const genreList = result.map((genre: Genre) => <li key={genre.id} onClick={e => forwardToPodcastList(genre)}>{genre.name}</li>);

    const filter = (event: ChangeEvent) => {
        // @ts-ignore
        let value = event.target.value;
        let searchArray = [] as Array<Genre>;
        genres.forEach((genre: Genre) => {
            if (genre.name.toLowerCase().includes(value)) {
                searchArray.push(genre);
            }
        });
        setInputValue(value);
        setResult(searchArray)
    };

    const forwardToPodcastList = (genre: Genre) => {
        props.history.push(`/genre/${genre.name + "-" + genre.id}`);
    };


    return <div className="container">
        {isLoading ? <LoadingSpinner/> :
            <>
                <input className="input-filter" onChange={filter} value={inputValue}/>
                <ul className="genres-list">
                    {genreList}
                </ul>
            </>}
    </div>;
};


export default withRouter(GenreList);