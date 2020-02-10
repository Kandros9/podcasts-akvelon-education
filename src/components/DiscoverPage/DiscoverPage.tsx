import React from 'react';
import './discover.scss'
import red_card from "../../assets/png/red_card.png"
import blue_card from "../../assets/png/blue_card.png"
import pink_card from "../../assets/png/pink_card.png"
import Card from "../Cards/Card";
import CardList from "../Cards/CardList";
import {withRouter} from "react-router";


const Discover = () => {

    const cropTitle = (title: string) => {
        const len = 35;
        let newTitle = title.substr(0, len);
        if (newTitle.length < len){
            return title;
        } else return newTitle.substr(0, Math.max(newTitle.lastIndexOf(' '), newTitle.lastIndexOf(',') - 1)) + "...";
    };


    return (
        <div className="card-container">
            <CardList/>
        </div>
    );
};


export default withRouter(Discover);