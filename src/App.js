import './styles/App.css';
import {Route, Routes} from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import Calculator from "./components/Calculator";
import History from "./components/History";
import React from "react";

function App() {

  return (
      <>
          <Routes>
              <Route exact path="/" element={<Calculator />} />
              <Route exact path="/login" element={<LoginForm />} />
              <Route exact path="/history" element={<History />}/>
          </Routes>
      </>
  );
}

export default App;
