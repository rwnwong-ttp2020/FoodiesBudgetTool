import React, { useState } from "react";
import ReactDOM from 'react-dom';
import App_BM from './src/components/HomePage_BM/App_BM.js';


function LoginModule(){
    
    let [userInput,setInput] = useState({
        inputEmail:"",
        inputPassword:""
    });

    let [isExitUser,setUserState] = useState(false);

    function handlePost(event){
        console.log(userInput);
        event.preventDefault();

        fetch('http://localhost:3939/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
             body: JSON.stringify(userInput),
            })
              .then(response => response.json())
              .then(data => {
                //console.log('Success:', data);
                setUserState(data.result);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
        if(isExitUser){
            ReactDOM.render(
                <App_BM userName = {userInput.inputEmail}/>,
                document.getElementById('root')
              );
        }else{
            //need to show the alert
            alert("User not found!");
            setInput((preV)=>{
                return {...preV,"inputPassword":"User Not Found!@"};
            });
        }
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
        
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address"  values={userInput.inputEmail} onChange={handleChange}/>
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" values={userInput.inputPassword} onChange={handleChange}/>
        <div class="checkbox mb-3">
        <br/>
        <label>
            <input type="checkbox" value="remember-me" /> Remember me
        </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="Submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">Foodies © 2021</p>
    </form>

    </div>
    );
}

export default LoginModule;