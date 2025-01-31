import React, {useEffect, useState} from 'react';
import './search.scss'
import {fetchSearchPodcasts, getImagesColor} from "../../api";
import {Colors, PodcastSearchItem} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import {getCardsImage} from "../../helpers/average_color";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {addSearchResultAction} from "../../redux/actions";
import EpisodesLoadingSpinner from "../LoadingSpinner/EpisodesLoadingSpinner";
import CardContainer from "../Cards/CardContainer";


type Props = RouteComponentProps & {
    param: string,
    setParam: any
}

const SearchArea = (props: Props) => {

    const [isLoading, setLoading] = useState(true);
    const [isPodcastsLoading, setPodcastsLoading] = useState(false);
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.search);

    //const term = window.location.pathname.split("/")[2];

    function fetch() {
        !isLoading && setPodcastsLoading(true);
        fetchSearchPodcasts(props.param, search.next_offset).then(result => {
            console.log(result);
            getImagesColor(result.results.map((podcast: PodcastSearchItem) => podcast.thumbnail)).then((colors: Colors) => {

                dispatch(addSearchResultAction(result.results, result.next_offset, getCardsImage(colors.dominant_colors)));
                setLoading(false);
                setPodcastsLoading(false)
                /*props.history.push(`/search/${props.param + "-" + result.total}`);
                props.setParam(props.param + "-" + result.total);*/
            })
        });
    }

    useEffect(() => {
        setLoading(true);
        fetch()
    }, [props.param]);


    return <div>
        <CardContainer isLoading={isLoading} podcastsSearch={search.results} podcasts={[]} colors={search.colors} {...props}/>
        <div className="load-block">
            {search.next_offset != 0 && (isPodcastsLoading ? <EpisodesLoadingSpinner/> :
                <div className="load-button" onClick={fetch}>Load more</div>)}
        </div>
        <br/>
    </div>;
};


export default SearchArea;