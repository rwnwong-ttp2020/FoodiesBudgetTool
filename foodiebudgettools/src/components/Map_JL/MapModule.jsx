import Dotenv from "dotenv";
import React from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import InformationArea from "./InformationArea";
import Searchbar from "../SearchModule/Searchbar";
import "./MapCss.css";


const Map = ({resData,center,zoom})=>{

  const [locationInfo, setLocationInfo] = React.useState(null);

  const markers = resData.businesses.map((resInfor)=>{// map = foreach function
    return <LocationMarker lat={resInfor.coordinates.latitude} lng={resInfor.coordinates.longitude}/> 
  });

    return (
      <div className="map">
          <Searchbar/>
          <GoogleMapReact 
            bootstrapURLKeys={{key:"AIzaSyCIAWqxvhz_7B4k69ZvdQ_Mz7g_rhm2clM"}}
            defaultCenter={center}
            defaultZoom ={zoom}
          >
          {markers}
          </GoogleMapReact>
          
      </div>
    );
};
Map.defaultProps = {
  resData:{
    businesses:[]
  },
  center:{
    lat: 40.730610,
    lng: -73.935242
  },
  zoom:15
}

export default Map;
//categories