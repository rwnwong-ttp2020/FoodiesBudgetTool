import {Icon} from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/safety-glasses"
import "./MapCss.css";

const LocationMarker = ({lat,lng, onClickF})=>{
    return (
        <div className="location-marker" onClick={onClickF}>
            <Icon 
            icon={locationIcon} 
            className="location-icon"
            />
        </div>
    );
}


export default LocationMarker;