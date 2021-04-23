import React, { useState } from "react";
import ReactDOM from 'react-dom';
import App_BM from '../HomePage_BM/App_BM';


function RegisterModule(){

     let [userInput,setInput] = useState({
        inputEmail:"",
        inputPassword:"",
        reInputPassword:""
    });
    
    let [isvisibleAlert,setVisible] = useState("none");
    //let [isSuccess,setResState] = useState(false);

    function handlePost(event){

        if(userInput.inputPassword !== userInput.reInputPassword){
            setVisible("");
            return;
        }

        event.preventDefault();

        fetch('http://localhost:3939/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
             body: JSON.stringify(userInput),
            })
              .then(response => response.json())
              .then(data => {
                console.log(data.result);
                if(data.result){
                  ReactDOM.render(
                      <App_BM userName = {userInput.inputEmail}/>,
                      document.getElementById('root')
                    );
                }else{
                  alert("something went wrong, try again.")
                }
              })
              .catch((error) => {
                console.error('Error:', error);
              });
    }
    
    function handleChange(event){
        const {id,value} = event.target;
        setInput((preV)=>{
            return {...preV,[id]:value};
        });
    }
   
    return (
    <div class="lgoinModule">
          
    <form class="form-signin" onSubmit={handlePost}>
        <img class="mb-4" src="../images/login_food.jpg" alt="" width="72" height="57" />
        
        <h1 class="h3 mb-3 fw-normal">Enter your Email & Password</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address"  values={userInput.inputEmail} onChange={handleChange}/>
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" values={userInput.inputPassword} onChange={handleChange}/>
        <label for="inputPassword" class="visually-hidden">re-Password</label>
        <input type="password" id="reInputPassword" class="form-control" placeholder="re-Password" values={userInput.reInputPassword} onChange={handleChange}/>
        <div class="checkbox mb-3">
        <br/>
        <p style={{display:isvisibleAlert,color:"red"}}>The secound password is not math to the first password, please check!</p>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="Submit">Sign Up</button>
        <p class="mt-5 mb-3 text-muted">Foodies © 2021</p>
    </form>

    </div>
    );
}

export default RegisterModule;