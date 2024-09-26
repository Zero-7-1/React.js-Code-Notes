import React from 'react';



export const SeriesCard = (props) => {
    return  (  
        <li>
           <div>
              <img 
                 src={props.series.seriesImage} 
                 alt={props.series.seriesName} 
                 width="40%" 
                 height="40%" 
              />
           </div>
           <h1>{props.series.seriesName}</h1>
           <h3>Ratings: {props.series.seriesRatings}</h3>
           <p>{props.series.seriesAbout}</p>
           <p>Genre: {props.series.seriesGenre}</p>
           <button>{props.canWatch(props.series.seriesRatings)}</button>
        </li>
    ); 
};