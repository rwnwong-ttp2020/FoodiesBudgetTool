
import APP_BM from "../src/components/HomePage_BM/App_BM";
import React,{useState,useEffect} from "react";
import fire from 'firebase';
import LoginModule from "../src/components/LoginModule_JL/LoginModule";
function App() {
  const [user,setUser]= useState("");
  const [email,setEmail]=useState("");
  const [password,setPwd]=useState("");
  const [emailError,setEmailError]=useState("");
  const [pwdError,setPwdError]=useState("");
  const [hasAccount,setAccount]=useState("");

  const clearInputs = ()=>{
    setEmail("");
    setPwd("");
  }
  const clearErrors = ()=>{
    setEmailError("");
    setPwdError("");
  }
  const handleLogin=(e)=>{
    e.preventDefault();
    clearErrors();
    console.log("in the login function "+email+"  pwd: "+password);
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
        switch (err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPwdError(err.message);
            break;
        }
      });
  };
  const handleSignup=(e)=>{
    e.preventDefault();
    clearErrors();
    console.log("in the signup function "+email+"  pwd: "+password);
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
        switch (err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPwdError(err.message);
            break;
        }
      });
  };
  const handleLogout=()=>{
    console.log("call logout funtion ");
    fire.auth().signOut();
  };
  const authListener = ()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      {user?(
      <APP_BM userName={email} handleLogout={handleLogout}/>
    ):(
      <LoginModule
        email={email}
        setEmail={setEmail}
        password={password}
        setPwd={setPwd}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setAccount={setAccount}
        emailError={emailError}
        pwdError={pwdError}
      />
    )}
    </div>
  );
}

export default App;
