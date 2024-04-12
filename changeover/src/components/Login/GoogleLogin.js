import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const [error, setError] = useState(null);

  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response from Google login
    // Typically, you'd send the token to your backend for authentication
  };

  const handleFailure = (error) => {
    console.error('Google login failed:', error);
    setError(error.error);
  };

  return (
    <div>
      <GoogleLogin
        clientId="875356705589-1s0ugf3vu5ac7m0d1q4okksp2j13f41r.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
      {error && <p>Sign-in was canceled: {error}</p>}
    </div>
  );
};

export default GoogleLoginButton;
