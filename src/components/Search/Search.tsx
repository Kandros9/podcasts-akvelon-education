import React, {ChangeEvent, useState} from 'react';
import './search.scss'
import {fetchSearch} from "../../api";
import {Search as SearchData} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";

type Props = RouteComponentProps & {
    setParam: any
}

const Search = (props: Props) => {

    const [resultItems, setResultItems] = useState<SearchData>({} as SearchData);
    const [isSearched, setSearched] = useState(false);
    const [inputValue, setInputValue] = useState("");


    const searchQ = (event: ChangeEvent) => {
        setSearched(false);
        // @ts-ignore
        let value = event.target.value;
        fetchSearch(value).then((result: SearchData) => {
            console.log(result);
           setResultItems(result)
        });
        setInputValue(value);
    };

    const forwardToPodcastList = (term: string) => {
        props.setParam(term);
        props.history.push(`/search/${term}`);
        setSearched(true);
        setInputValue(term);
    };

    return (
        <div className="search-container">
            <input className="input-search" onChange={searchQ} value={inputValue}/>
            {resultItems.terms && (!isSearched && <div className="search-result">
                <ul className="search-result-list">
                    {resultItems.terms.map((term: string) => <li key={term} onClick={event => forwardToPodcastList(term)}>{term}</li>)}
                </ul>
            </div>)}
        </div>
    );
};


export default Search;