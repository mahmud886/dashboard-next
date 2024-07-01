'use client'

import React, { useState } from 'react';
import Image from "next/image";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const signInWithFB = () => {
    // Implement Facebook sign-in logic here
    console.log('Sign in with Facebook');
  };

  const loginWithGoogle = () => {
    // Implement Google sign-in logic here
    console.log('Login with Google');
  };

  const loginAsGuest = () => {
    // Implement guest login logic here
    console.log('Login as Guest');
  };


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-center bg-cover" style={{backgroundImage: "url('/images/login/loginbg.jpg')"}}>
      <div className="text-white text-center min-w-[300px] flex flex-col justify-center">
        <Image className="mb-8 max-w-[100px] mx-auto" src="/images/login/vertical logo.png" alt="" width={98}
               height={122}/>
        <h3 className="mb-8 text-2xl">Log in with</h3>

        <button
          onClick={signInWithFB}
          className="btn bg-[#2573CB] px-4 pt-1 mb-6 rounded-full text-white border-none hover:bg-[#164377]"
        >
          <i className="fa fa-facebook-f"></i>
          Connect with Facebook
        </button>

        <button
          onClick={signInWithFB}
          className="btn bg-[#2573CB] px-4 pt-1 mb-6 rounded-full text-white border-none hover:bg-[#164377]"
        >
          <i className="fa fa-facebook-f"></i>
          Connect with Google
        </button>

        <button onClick={loginAsGuest} className="pt-[30px] text-white border-none underline">
          Log in as Guest
        </button>
      </div>
    </div>
  );
};

export default Login;
