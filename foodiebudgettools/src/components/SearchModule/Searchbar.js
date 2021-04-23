import React from "react";
import ReactDOM from 'react-dom';
import "./style.css";

function Searchbar(){
    return(
        <div className="header">
            <form>
            <h1> Find Restaurants Near You </h1>
            <div className="form-box">
            <input type="text" className="search-field restaurant" placeholder="Resturants"/>

            <input type="text" className="search-field location" placeholder="Location"/>

            <button className="search-btn" type="button">Search</button>

            </div>

            </form>
        </div>
    );
}
export default Searchbar;
