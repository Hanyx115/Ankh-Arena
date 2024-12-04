import React, {useState} from 'react';
import { Outlet } from "react-router-dom";


// styling
import './Contanier.css';

// components
import SignIn from './SignIn';
import SignUp from './SignUp';

const Container = ({ children }) => {
  const [welcome, setWelcome] = useState(false)

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"]
    if (welcome) classArr.push('send-right')
    return classArr.join(' ')
  }

  const setFormClass = () => {
    const classArr = ["form-side cfb"] 
    if (welcome) classArr.push('send-left')
    return classArr.join(' ')
  }

  return (
    <div className='cfb'>
      

    <div className="Container App ">
      

      <div className={setBannerClass()}> 

        {welcome ? 
          <h2>Join the League</h2>
            : <h2>Welcome Back</h2>}

        <button onClick={()=> setWelcome(!welcome)}>
          {welcome ?
            "Sign In"
              : "Create Account"}
        </button>
      </div>

      <div className={setFormClass()}> 
          {welcome ? 
            <SignUp /> 
              : <SignIn/>
          }
          
      </div>
      <Outlet />
    </div>
    </div>
  );

}

export default Container;