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
        <Image className="mb-8 max-w-[100px] mx-auto" src="/images/login/vertical logo.png" alt="" width={98} height={122}/>
        <h3 className="mb-8 text-2xl">Log in with</h3>

        {!loggedIn && (
          <button
            onClick={signInWithFB}
            className="btn bg-[#2573CB] px-4 pt-1 mb-6 rounded-full text-white border-none hover:bg-[#164377]"
          >
            <i className="fa fa-facebook-f"></i>
            Connect with Facebook
          </button>
        )}

        <div
          className={`flex justify-between items-center gap-2 btn bg-white px-4 pt-1 rounded-full text-[#EA4335] border-none hover:bg-white ${loggedIn ? '' : 'g_id_signin'}`}
          datatype="standard"
          data-shape="pill"
          data-theme="outline"
          data-size="large"
          data-locale="en-US"
          data-logo_alignment="center"
          data-text="Connect with Google"
          onClick={loginWithGoogle}
        >
          <Image className="w-4" src="/images/login/google.png" alt="facebook" width={4} height={4} />
          Connect with Google
        </div>

        {!loggedIn && (
          <div
            id={!loggedIn ? 'g_id_onload' : null}
            data-client_id="628835874075-bjvatcpv4r85abmfcvg03815iuc43d9q.apps.googleusercontent.com"
            data-ux_mode="popup"
            data-callback={loginWithGoogle}
            data-nonce=""
            data-itp_support="false"
            data-auto_prompt="false"
          ></div>
        )}

        <button onClick={loginAsGuest} className="pt-[30px] text-white border-none underline">
          Log in as Guest
        </button>
      </div>
    </div>
  );
};

export default Login;
