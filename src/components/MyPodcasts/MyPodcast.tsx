import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteMyPodcastsAction} from "../../redux/actions";

type Props = RouteComponentProps & {
    id: string,
    title: string;
    thumbnail: string,
    publisher: string;
};

const MyPodcast = (props: Props) => {
    const {id, title, thumbnail, publisher} = props;
    const dispatch = useDispatch();

    const forwardToPodcastView = () => {
        props.history.push(`/podcast/${id}`)
    };

    const unsubscribePodcast = (e: any) => {
        e.stopPropagation();
        dispatch(deleteMyPodcastsAction(id));
    };

    return (
        <div className="my-podcast">
            <div className="my-podcast-area" onClick={forwardToPodcastView}>
                <img src={thumbnail} alt="Cover" className="podcast-image"/>
                <div className="podcast-header-info">
                    <h1>{title}</h1>
                    <h3>By {publisher}</h3>
                    <button className="unsubscribe-btn" onClick={e => unsubscribePodcast(e)}>Unsubscribe</button>
                </div>
            </div>
            <br/>
        </div>
    );
};


export default MyPodcast;