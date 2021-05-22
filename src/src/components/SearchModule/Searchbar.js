import React from "react";
import ReactDOM from 'react-dom';
import MapModule from "../Map_JL/MapModule";
import "./style.css";

function Searchbar(){
    const port = process.env.PORT || 5000;
    function handlePost(){
        //1. getting user input
        let resturant = document.getElementById("resturant").value;
        let location = document.getElementById("location").value;
        let userInputData = {
            "resturant":resturant,
            "location":location
        };
        //make request
        fetch('http://localhost/search', {//
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userInputData),
            })
              .then(response => response.json())
              .then(data => {
                if(data){
                    console.log(data);
                    ReactDOM.render(
                        <MapModule resData={data}/>,
                        document.getElementById('root')
                    );
                }else{
                    console.log("can not get the data");
                }
              })
              .catch((error) => {
                console.error('Error:', error);
              });
    }

    return(
        <div className="header">
            <form>
            <h1> Find Restaurants Near You </h1>
            <div className="form-box">
            <input type="text" id="resturant" className="search-field restaurant" placeholder="Resturants"/>

            <input type="text" id="location" className="search-field location" placeholder="Location"/>

            <button className="search-btn" type="button" onClick={handlePost}>Search</button>

            </div>

            </form>
        </div>
    );
}
export default Searchbar;
