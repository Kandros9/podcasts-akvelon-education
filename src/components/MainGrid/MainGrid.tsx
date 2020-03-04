import React, {useState} from 'react';
import './main_grid.scss'
import podcast_logo from '../../assets/png/podcast_logo.png'
import SideBar from "../SideBar/SideBar";
import Search from "../Search/Search";
import Discover from "../DiscoverPage/DiscoverPage";
import Podcast from "../Podcast/PodcastView";
import {RouteComponentProps, withRouter} from "react-router";
import SearchArea from "../Search/SearchArea";
import MyPodcastList from "../MyPodcasts/MyPodcastList";
import EpisodeHistoryList from "../EpisodeHistory/EpisodesHistoryList";
import GenreList from "../Genres/GenreList";
import GenreArea from "../Genres/GenreArea";


const MainGrid = (props: RouteComponentProps) => {

        const [param, setParam] =  useState("");

        let parameter = window.location.pathname.split("/")[2];

        let title = parameter && parameter.split("-")[0].replace("%20", " ");

        let id =  parameter && parameter.split("-")[1];

        let location = window.location.pathname.split("/")[1].toUpperCase().replace("_", " ");

        let page_name = location;
        page_name = (title && id) ? title : page_name;

        const renderMainArea = () => {
                switch (location) {
                        case 'DISCOVER':
                                return <Discover {...props}/>;
                        case 'PODCAST':
                                return <Podcast {...props}/>;
                        case 'SEARCH':
                                return <SearchArea param={param} setParam={setParam} {...props}/>;
                        case 'MY PODCASTS':
                                return <MyPodcastList {...props}/>;
                        case 'HISTORY':
                                return <EpisodeHistoryList {...props}/>;
                        case 'GENRES':
                                return <GenreList {...props}/>;
                        case 'GENRE':
                                return <GenreArea genreId={id} {...props}/>;
                        default:
                                return null;
                }
        };

        return (
            <div className="main-grid">
                <div className="logo">
                        <img src={podcast_logo} alt="Logo"/>
                </div>
                <div className="page-title">
                        <h1>{page_name}</h1>
                </div>
                <div className="search">
                        <Search setParam={setParam} {...props}/>
                </div>
                <div className="nav">
                        <SideBar {...props}/>
                </div>
                <div className="main-area">
                        <div className="scroll_area">{renderMainArea()}</div>

                </div>
            </div>
        );
};


export default withRouter(MainGrid);
