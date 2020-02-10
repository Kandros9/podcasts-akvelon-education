import React, {useEffect} from 'react';
import './podcast.scss'
import {RouteComponentProps, withRouter} from "react-router-dom";

interface MatchParams {
    title: string;
}
type Props = RouteComponentProps<MatchParams>;

const Podcast = (props: Props) => {

    useEffect(() => {
        console.log(props.match.params.title)
    }, []);

    return (
        <div>
        </div>
    );
};

export default withRouter(Podcast);
