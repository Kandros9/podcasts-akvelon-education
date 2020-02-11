import React from 'react';
import './main_grid.scss'
import podcast_logo from '../../assets/png/podcast_logo.png'
import SideBar from "../SideBar/SideBar";
import Search from "../Search/Search";
import Discover from "../DiscoverPage/DiscoverPage";
import Podcast from "../Podcast/PodcastView";
import {RouteComponentProps, withRouter} from "react-router";


const MainGrid = (props: RouteComponentProps) => {

        const page_name = window.location.pathname.split("/")[1].toUpperCase().replace("_", " ");

        const renderMainArea = () => {
                switch (page_name) {
                        case 'DISCOVER':
                                return <Discover {...props}/>;
                        case 'PODCAST':
                                return <Podcast {...props}/>;
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
                        <Search/>
                </div>
                <div className="nav">
                        <SideBar {...props}/>
                </div>
                <div className="main-area">
                        {renderMainArea()}
                </div>
            </div>
        );
};


export default withRouter(MainGrid);
