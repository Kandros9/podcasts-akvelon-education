import React from 'react';
import MainGrid from "./MainGrid/MainGrid";
import {createBrowserHistory} from 'history';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import "./App.scss"
import Discover from "./DiscoverPage/DiscoverPage";
import PodcastView from "./Podcast/PodcastView";
import Player from "./AudioPlayer/AudioPlayer";
import SearchArea from "./Search/SearchArea";

const history = createBrowserHistory();

const App = () => {

    return (
        <>
                <Router history={history}>
                    <MainGrid/>
                    <Switch>
                        <Route exact path='/' render={props => <Redirect to={{ pathname: "/discover"}} {...props}/>}/>
                        <Route path="/discover"/>
                        <Route path='/podcast/:id'/>
                    </Switch>
                </Router>
            <div className="player"><Player/></div>
        </>
    );
};

export default App;