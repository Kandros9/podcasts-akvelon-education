import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";

const EpisodesLoadingSpinner = () => <div className="episode-loader-wrapper">
    <Loader
        type="Oval"
        color="#c71e67"
        height={40}
        width={40} />
</div>;

export default EpisodesLoadingSpinner;