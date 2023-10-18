import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'



const domain = import.meta.env.DOMAIN 
const client_id = import.meta.env.CLIENT_ID
const redirect_uri = import.meta.env.REDIRECT_URI
const audience = import.meta.env.AUDIENCE


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain = {domain}
      client_id = {client_id}
      authorizationParams={{
        redirect_uri: {redirect_uri}
      }}
      audience = {audience}
      scope = "openid profile email"
    >
      <App />
    </Auth0Provider>    
  </React.StrictMode>
);
