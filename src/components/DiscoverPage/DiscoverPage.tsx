import React from 'react';
import './discover.scss'
import CardList from "../Cards/CardList";
import {withRouter} from "react-router";


const Discover = () => {

    return (
        <div className="card-container">
            <CardList/>
        </div>
    );
};


export default withRouter(Discover);