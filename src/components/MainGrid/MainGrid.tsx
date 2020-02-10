import React, {useEffect, useState} from 'react';
import './main_grid.scss'
import podcast_logo from '../../assets/png/podcast_logo.png'
import SideBar from "../SideBar/SideBar";
import Search from "../Search/Search";


const MainGrid = (props: any) => {

        const [title, setTitle] = useState("");

        useEffect(() => {
               setTitle(window.location.pathname.split("/")[1].toUpperCase().replace("_", " "))
        }, []);

        return (
            <div className="main-grid">
                <div className="logo">
                        <img src={podcast_logo} alt="Logo"/>
                </div>
                <div className="page-title">
                        <h1>{title}</h1>
                </div>
                <div className="search">
                        <Search/>
                </div>
                <div className="nav">
                        <SideBar/>
                </div>
                <div className="main-area">
                        {props.children}
                </div>
            </div>
        );
};


export default MainGrid;
