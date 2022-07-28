import React from "react";
// import {ReactDOM} from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Moviedetail from "./Components/Moviedetail/Moviedetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
        
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"element ={<Home/>} />
            <Route path="/movie/:imdbID" element={<Moviedetail/>} />
            <Route element={<PageNotFound/>} />
            </Routes>
            </div>
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
