import React from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
// import InformationArea from "./InformationArea";
import Searchbar from "../SearchModule/Searchbar";
import InformationBox from "./InformationBox";
import "./MapCss.css";

const Map = ({resData,center,zoom})=>{

  const [locationInfo, setLocationInfo] = React.useState(null);

  const markers = resData.businesses.map((resInfor)=>{// map = foreach function
    return <LocationMarker lat={resInfor.coordinates.latitude} lng={resInfor.coordinates.longitude} 
            onClickF={()=>{
              setLocationInfo({               
                                "Name":(resInfor.name !== "")?resInfor.name:"No Inforamtion...",
                                "Price":(resInfor.price !=="$" || resInfor.price !=="$$" || resInfor.price !=="$$$" || resInfor.price !=="" || resInfor.price !== null)?resInfor.price:"No Inforamtion...",
                                "Phone":(resInfor.display_phone !== "")?resInfor.display_phone:"No Inforamtion...",
                                "Address":(resInfor.location.display_address !== "")?resInfor.location.display_address:"No Inforamtion...",
                                "URL":(resInfor.url !== "")?resInfor.url:"No Inforamtion...",
                                })
            }}/> 
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
          {locationInfo && <InformationBox infor={locationInfo}/>}
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
  zoom:11
}

export default Map;
