import {useState } from 'react';

export default function Login() {

 
    const  [isLoggedIn, setIsLoggedIn] =  useState(true);

    function handleLoginClick(){
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
         <button className='btn' onClick={handleLoginClick}> 
            {isLoggedIn ? "Logout" : "Login"}
            </button>   
        </div>
    );
}