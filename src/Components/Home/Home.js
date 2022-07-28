import React, { useEffect } from "react";
import Movielisting from "../Movielisting/Movielisting";

import { useDispatch } from "react-redux";
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../Redux/Movies/MovieSlice";
const Home = () => {
    const dispatch = useDispatch();
    const movieText = "harry";
    const showText = "Friends";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch]);
    return ( <div >
        <div className = "banner-img" > </div> <
        Movielisting / >
        </div>
    );
};

export default Home;