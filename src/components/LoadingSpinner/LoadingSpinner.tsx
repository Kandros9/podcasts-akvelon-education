import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";

const LoadingSpinner = () => <div className="loader-wrapper">
    <Loader
        type="Circles"
        color="#c71e67"
        height={150}
        width={150} />
</div>;

export default LoadingSpinner;