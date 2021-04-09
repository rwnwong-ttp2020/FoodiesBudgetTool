import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { GoogleMapReact } from "google-map-react";
import "./MapCss.css";

const Map = ({center,zoom})=>{
    return (
      <div>
          <GoogleMapReact 
            bootstrapURLKeys={{key:"AIzaSyAzwWkXI6vClEGWAa50FlSWBaJZAYoVN-g"}}
            defaultCenter={center}
            defaultZoom ={zoom}
          />
      </div>
    );
};
Map.defaultProps = {
  center:{
    lat: 40.730610,
    lon: -73.935242
  },
  zoom:8
}
function MapModule(){
    //AIzaSyAzwWkXI6vClEGWAa50FlSWBaJZAYoVN-g
    return (
        <div>
            <h1>The Map</h1>
            <div id="map"></div>
            
        </div>
    );
}

export default MapModule;