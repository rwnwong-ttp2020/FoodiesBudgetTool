import React from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import "./MapCss.css";

const Map = ({restaurantData,center,zoom})=>{
  const [locationInfo, setLocationInfo] = React.useState(null);

  // const markers = restaurantData.map((resInfo,index)=>{
  //     //need to check restaurantData, get the name and lat and lng number.
  //     //return <LocationMarker key={index} lat={lat} lng={center.lng}/>;
  // });
    return (
      <div className="map">
          <GoogleMapReact 
            bootstrapURLKeys={{key:"**********"}}
            defaultCenter={center}
            defaultZoom ={zoom}
          >
          {/* in here should call markers!! */}
            <LocationMarker lat={center.lat} lng={center.lng}/>
          </GoogleMapReact>
          {/* <input type="text" id="search" class="form-control" placeholder="Email address"  values={userInput.inputEmail} onChange={handleChange}/> */}
      </div>
    );
};
Map.defaultProps = {
  center:{
    lat: 40.730610,
    lng: -73.935242
  },
  zoom:15
}

export default Map;
