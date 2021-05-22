import React from "react";
import "./MapCss.css";
const InformationBox = ({infor})=>{
    let partURL = infor.URL.substring(8,30)+"...";
    return (
    <div className="location-info">
        <h2>Restaurant Information</h2>
        <ul>
            <li>Name: <strong>{ infor.Name }</strong></li>
            <li>Price: <strong>{ infor.Price }</strong></li>
            <li>Phone: <strong>{ infor.Phone }</strong></li>
            <li>Address: <strong>{ infor.Address }</strong></li>
            <li>WebSite: <strong><a href={infor.URL} target="_blank" > {partURL}</a></strong></li>
        </ul>
    </div>);
}

export default InformationBox;