import React from 'react';
import MainGrid from "./MainGrid/MainGrid";
import {BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps} from 'react-router-dom';
import "./App.css"
import Discover from "./DiscoverPage/DiscoverPage";
import Podcast from "./Podcast/PodcastView";

const App = () => {
    return (
        <>
            <MainGrid>
                <Router>
                    <Switch>
                        <Route exact path='/' render={props => <Redirect to={{ pathname: "/discover"}} {...props}/>}/>
                        <Route path="/discover" component={Discover}/>
                        <Route path='/podcast/:title' component={Podcast}/>
                    </Switch>
                </Router>
            </MainGrid>
            <div className="player">Player</div>
        </>
    );
};

export default App;