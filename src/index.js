import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import './styles/index.css';
import App from './App';
import AuthProvider from "./context/Auth.context";
import HistoryProvider from "./context/Operations.context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <HistoryProvider>
              <AuthProvider>
                  <App />
              </AuthProvider>
          </HistoryProvider>
      </Router>
  </React.StrictMode>
);

