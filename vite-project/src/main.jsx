import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// Ensure environment variables are correctly loaded
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!domain || !clientId) {
  console.error('Auth0 domain or client ID is not defined. Please check your environment variables.');
}

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated for React 18+
root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
