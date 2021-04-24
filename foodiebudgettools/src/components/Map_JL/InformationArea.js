import React from "react";
import ReactDOM from 'react-dom';
import MapModule from "./MapModule";
function InformationArea(){

    function handlePost(event){
        event.preventDefault();
       
        let searchText = document.getElementById("inputText").value;
        fetch('http://localhost:3939/search', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({"userInput":searchText}),
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
    return (
        <div className="informationArea">
            <form class="form-signin">
            <h1 class="h3 mb-3 fw-normal">What is in your mind?</h1>
            <label for="inputSearch" class="visually-hidden">Type something here</label>
            <input type="text" id="inputText" class="form-control" placeholder="Type something here"  />
            <button class="w-100 btn btn-lg btn-primary" type="Submit" onClick={handlePost}>Go!</button>
            </form>
        </div>
    );
}
export default InformationArea;

// values={} onChange={}  