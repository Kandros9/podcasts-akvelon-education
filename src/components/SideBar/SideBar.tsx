import React from 'react';
import './side_bar.scss'
import DiscoverIcon from "../Icons/DiscoverIcon";
import MyPodcastsIcon from "../Icons/MyPodcastsIcon";
import GenresIcon from "../Icons/GenresIcon";

const SideBar = () => {

    const forward = (item: string) => {
        window.location.href = `/${item}`
    };

    return (
        <div className="side-bar-box">
            <div className="side-bar-item" onClick={e => forward("discover")}>
                <div className="side-bar-item-content"><DiscoverIcon/>&emsp;Discover</div>
            </div>
            <div className="side-bar-item" onClick={e => forward("my_podcasts")}>
                <div className="side-bar-item-content"><MyPodcastsIcon/>&emsp;My podcasts</div>
            </div>
            <div className="side-bar-item" onClick={e => forward("genres")}>
                <div className="side-bar-item-content"><GenresIcon/>&emsp;Genres</div>
            </div>
        </div>
    );
};


export default SideBar;