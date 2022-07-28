import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../Images/user.png";
import { fetchAsyncMovies, fetchAsyncShows } from "../../Redux/Movies/MovieSlice";
import "./Header.scss";
import {useDispatch} from "react-redux"

const Header = () => {
  const[term,change]=useState("");
  const dispatch=useDispatch();
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(term);
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    change("");
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <form onSubmit={submitHandler}>
      <div className="ui category search">
  <div className="ui icon input">
    <input className="prompt" type="text" value={term} placeholder="Search animals..." onChange={(e)=>{change(e.target.value)}} required/>
    <i className="search icon"></i>
  </div>
  <button class="ui button" style={{background:"white"},{margin:"0 0 0 10px"}}>GO</button>
</div>
</form>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
