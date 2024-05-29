import React from 'react';
import s from './MapPage.module.css'
import MapComponent from "../../components/MapComponent/MapComponent";

const MapPage = () => {
    const position = [55.44, 37.36]
    return (
        <div>
            <MapComponent/>
        </div>
    );
};

export default MapPage;