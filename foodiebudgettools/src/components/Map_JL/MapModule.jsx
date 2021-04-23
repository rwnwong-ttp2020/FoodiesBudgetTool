import React from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import InformationArea from "./InformationArea";
import "./MapCss.css";

const Map = ({resData,center,zoom})=>{
  
  const [locationInfo, setLocationInfo] = React.useState(null);

  const markers = resData.result.map((resInfor)=>{
    return <LocationMarker lat={resInfor.coordinates.lat} lng={resInfor.coordinates.lng}/> 
  });

    return (
      <div className="map">
          <GoogleMapReact 
            bootstrapURLKeys={{key:"AIzaSyCIAWqxvhz_7B4k69ZvdQ_Mz7g_rhm2clM"}}
            defaultCenter={center}
            defaultZoom ={zoom}
          >
          {markers}
          </GoogleMapReact>
          <InformationArea />
      </div>
    );
};
Map.defaultProps = {
  resData:{
    result:[]
  },
  center:{
    lat: 40.730610,
    lng: -73.935242
  },
  zoom:15
}

export default Map;
