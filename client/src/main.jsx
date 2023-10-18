import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'



const domain_i = import.meta.env.VITE_REACT_APP_DOMAIN
const client_id = import.meta.env.VITE_REACT_APP_CLIENT_ID



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider     
      domain={domain_i}
      clientId={client_id}
      authorizationParams={{
        redirect_uri: "http://localhost:5173"
      }}
      audience = "http://localhost:8000"
      scope = "openid profile email"
    >
      <App />
    </Auth0Provider>    
  </React.StrictMode>
);
