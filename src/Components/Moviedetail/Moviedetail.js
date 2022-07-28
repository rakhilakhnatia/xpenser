import React from 'react';
import { useParams } from 'react-router-dom';
import "./Moviedetail.scss";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { fetchAsyncMovieOrShowDetail,getSelectedMovieOrShow } from '../../Redux/Movies/MovieSlice';

const Moviedetail = () => {
        var id= useParams();
        const dispatch = useDispatch();
        // console.log(id.imdbID);
        useEffect(()=>{
            dispatch(fetchAsyncMovieOrShowDetail(id.imdbID))
        },[dispatch,id])
let datat =useSelector(getSelectedMovieOrShow);
    // datat.Ratings.map((i)=>{
        // console.log(i.Source));
        // console.log(i.Source)
        //     console.log(element.map((i)=>i));
        // });

        return ( <> 
        <div className="main">
          <div className="leftsection">
              <h1>
                  Movie Name &nbsp;
                  :
                &nbsp;  {datat.Title}
              </h1>
              <h3>Release date <i class="fa-solid fa-calendar"></i>&nbsp;:&nbsp; {datat.Released}</h3>
              <h3> Total Timing <i class="fa-solid fa-film"></i>&nbsp;:&nbsp; {datat.Runtime }</h3>
              <h2>Actors &nbsp;:&nbsp; {datat.Actors}</h2>
              <h2>Awards &nbsp;: &nbsp;{datat.Awards}</h2>
              <p><strong>Plot story</strong> &nbsp;{datat.Plot}</p>
              <h3>imdbRating <i class="fa-solid fa-star"></i>&nbsp;:&nbsp;{datat.imdbRating}</h3>
              <h3>imdbVotes <i class="fa-solid fa-thumbs-up"></i>&nbsp;:&nbsp;{datat.imdbVotes}</h3>
              {/* <h2>Ratings :{datat.Ratings[0]}</h2> */}
              </div>  
            <div className="right-section">
            </div>
            <div className="mainimg"><img src={datat.Poster}alt="" /></div>
    
    </div>
            
        
            </>);
        };

        export default Moviedetail;