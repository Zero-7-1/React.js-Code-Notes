/* We need to use this PrimeSeries Component in App.jsx using import and 
   export and these are of various types like 
   1. Default export 
   2. Named export
   3. or both combined which we used here 
*/

import React from "react"; 
import PrimeData from "../api/PrimeData.json"; 
import { Cards } from "../components/Cards";



/*
Q. EXPLAIN ABOUT DEFAULT EXPORT ? 
   We can give any name with default export but recommended to use file or 
   component name, then we import it in App.jsx with import keyword and file name 
   by specifying its location (automatically we should get location inserted). 
   
   Note that there can only be one default for each file so it is used for exporting 
   many values in one component. 
   
   We used default for PrimeSeries component here. 

*/ 

// This the PrimeSeries Component which will be imported in App.jsx 
const PrimeSeries = () => {
      let userAge = 25;
      const canWatch = () => {
            if (userAge >= 18) return "Watch Now";
            return "Turn off Kids Mode";
         }

   // PrimeSeries Component returns this 
   // Additionally we have imported a json file for fetching data  
   return (
      <ul> 
         {PrimeData.map((series) => (<Cards keyProp={series.id} seriesProps = {series}/>
         ))}
      </ul>
   );
};
export default PrimeSeries; // this is default export 


/* Q. EXPLAIN ABOUT NAMED IMPORT AND EXPORT ? HOW IT DIFFERES FROM DEFAULT ?
  
   We used named export for Footer and Header here which are 
   another components inside PrimeSeries component. (We can have both one default 
   and many named in a sigle file)

   It allows to export multiple components from a single file unlike default which
   exports only one componet (within it we can return many values though). 

   The names of the exports matters here a lot
*/

  export const Header = () => {
    return <p> This would be Header </p>
  }

  export const Footer = () => {
    return <p> copyright @AmazonFlip </p>
  }


  /*
  Props (or Properties)

  Q. WHAT IS PROP IN RECACT ? 
  Props (short for properties) are used to pass data from one component to another 
  in React. They are like function arguments that are passed into React components 
  and help make components reusable.
  
  
  */