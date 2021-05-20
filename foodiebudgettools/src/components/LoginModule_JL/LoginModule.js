import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import App_BM from '../HomePage_BM/App_BM';
import RegisterModule from './RegisterModule';
import { Link } from 'react-router-dom';
function LoginModule(props){
    const {email,setEmail,password,setPwd,
        handleLogin,handleSignup,hasAccount,setAccount,
        emailError,pwdError}=props;
        
    return (
    <div class="lgoinModule">
    <form class="form-signin" >
        <img class="mb-4" src="../images/login_food.jpg" alt="" width="72" height="57" />
        
        <h1 class="h3 mb-3 fw-normal">Please {hasAccount?"Sign In":"Sign Up"}</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address"  values={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <p style={{color:"red"}}>{emailError}</p>
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" values={password} onChange={(e)=>{setPwd(e.target.value)}}/>
        <p style={{color:"red"}}>{pwdError}</p>
        <div>
            {hasAccount?(
                <>
                <button class="w-100 btn btn-lg btn-primary" onClick={handleLogin}>
                Sign In
                </button>
                <p class="fs-6">Not have an account yet? <span onClick={()=>{setAccount(!hasAccount)}}>Sign UP</span></p>
                </>
            ):(
                <>
                <button class="w-100 btn btn-lg btn-primary" onClick={handleSignup}>
                Sign Up
                </button>
                <p class="fs-6">Has an account aleady? <span onClick={()=>{setAccount(!hasAccount)}}>Sign In</span></p>
                </>
            )}
            
        </div>
        <p class="mt-5 mb-3 text-muted">Foodies © 2021</p>
    </form>

    </div>
    );
}

export default LoginModule;