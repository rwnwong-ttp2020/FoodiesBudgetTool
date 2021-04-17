import React from "react";
import ReactDOM from 'react-dom';

function InformationArea(){

    function handlePost(event){
        event.preventDefault();
       
        let searchText = document.getElementById("inputText").value;
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');

        fetch('/search', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(searchText),
            })
              .then(response => response.json())
              .then(data => {
                if(data){
                    console.log(data);
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