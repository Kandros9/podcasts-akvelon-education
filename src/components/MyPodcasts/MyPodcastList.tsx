import React from 'react';
import {PodcastShortInfo} from "../../types/data";
import {RouteComponentProps} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import MyPodcast from "./MyPodcast";
import "./my_podcasts.scss"


const MyPodcastList = (props: RouteComponentProps) => {

    const myPodcasts = useSelector((state: RootState) => state.myPodcasts);

    const myPodcastsOrdered = myPodcasts.my_podcasts.sort((a, b) => b.last_played - a.last_played);


    return <div className="my-podcasts-container">
            {myPodcasts.my_podcasts.length !== 0 ? myPodcastsOrdered.map((podcast: PodcastShortInfo, index: number) => {
                    return <MyPodcast key={podcast.id} id={podcast.id} title={podcast.title}
                                 thumbnail={podcast.thumbnail} publisher={podcast.publisher} {...props}/>
            }) : <div className="no-podcasts">No podcasts added</div>}
        </div>;
};


export default MyPodcastList;