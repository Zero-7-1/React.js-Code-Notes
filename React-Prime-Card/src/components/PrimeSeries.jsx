/* We need to use this PrimeSeries Component in App.jsx using import and 
   export and these are of various types like 
   Default export 
   Named export
   or both combined which we used here 
*/

// We create a component here and we will call this in App component 
import React from "react"; 
import PrimeData from "../api/PrimeData.json"; 
import { Cards } from "./cards";





const PrimeSeries = () => {

   let userAge = 25;
   const canWatch = () => {
      if (userAge >= 18) return "Watch Now";
      return "Turn off Kids Mode";
            }

// this is the return of PrimeSeries Component 
   return (
      <ul> 
         {PrimeData.map((series) => {
         <Cards keyProp={series.id}  seriesProps = {series}  />
         })}
      </ul>
   );
};
export default PrimeSeries; 




/*
Q. EXPLAIN ABOUT DEFAULT EXPORT ? (V. Imp.)
   We can give any name with export default but recommended to use file name or 
   component (similarly we could use a different name for import, again not needed), 
   then we import it in App.jsx with import keyword and file name 
   by specifying that is from (automatically we should get location inserted) which
   location. 
   Note that only one default 
   We used default for PrimeSeries component 

*/ 

/* Q. EXPLAIN ABOUT NAMED IMPORT AND EXPORT ? HOW IT DIFFERES FROM DEFAULT ? (V.Imp.)
  
   We used named export for Footer and Header
   which are another component inside PrimeSeries
   

*/

  export const Header = () => {
    return <p> This would be Header </p>
  }


  export const Footer = () => {
    return <p> copyright @AmazonFlip </p>
  }






  /*
- We always put images in public folder and after that we dont need to specify 
full path in src of img tag. 

Q. EXLAIN ABOUT DYNAMIC VALUES IN JS. (Imp.)
   - We could add any variable in our component in JSX by enclosing in {} 
     and it will be inserted into DOM

   - These {} can return expressions too basically anything that results a value
     even a function call
*/