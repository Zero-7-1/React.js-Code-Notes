/*
TOPICS COVERED IN THIS MINI PROJECT:

- > IMPORT AND EXPORT
- > LOOPS IN JSX
- > PROPS (Currently facing problem in this )






Q. EXPALIN WHAT IS JSX ? (V. IMP)
   - JSX stands for JavaScript XML (JavaScript Syntax Extension)
   - It basically the syntax used here in react that allows us to write 
     HTML elements in JavaScript and react puts in DOM without any DOM methods for
     us to write like createElement or appendChild internally. 
   
     - In React behind the scene this happens basically:
       React.createElement("h1", "null", "Hello From React");
       null is for props which acts as attributes, this is what 
       internally react does 
       
       for our this jsx code below 
      
      export const App = () => {
         return <h1>Hello from React</h1>;
         };
         
     React used Babel which is a JS compiler and in React 19 it will have its 
     own compiler where JSX made more powerful and no need of createElement.
     Browser doesn't understand jsx sytax so it takes the help of compiler then 
     react further converts to it objects and to elements (Virtual DOM).

 

*/

/*
Q. EXPLAIN WHAT ARE COMPONENTS IN REACT ? (V. IMP)
Components are  resuable pieces of codes to build elements on a page, it can be also 
thought as custom HTML element. Compnonets can be broken down into smaller ones 
and is called composition. These are great ways of building UIs providing scalability
and easier to maintain. 
-  Components are like JavaScript functions that returns HTML or specifically JSX
-  A componnet always starts with capital letter as here in our App.jsx
-  Components are always starts with upper case by convention 

Q. HOW MANY TYPES OF COMPONENTS ARE THERE IN REACT ? **
We had an old one Class Components which is not used anymore as it was 
more lengthy so Functional Components which is used today widely. We shall
see Class Components some time later for this now we should focus on functional
components. 
 
Q. BY DEFAULT WHICH COMPONENT IS RENDERED IN REACT ? AND WHERE IT IS LOCATED ? 
   By default only App component is rendered which is located inside main.jsx 
   Note that every react app must have one component and that is called 
   Root component

Q. WHAT ARE PROPS IN COMPONENTS ? 
   Props are like arguments and attributes or properties which can hold thier own 
   state and data.

Q. EXPALIN WHAT IS STATE ? HOW TO DEFINE IT ? 
   State represents the data that a component manages internally, it allows 
   components to store and manage their own data which can change with time, change 
   in response to user interactions or other factors. State is typically used for 
   data that's expected to change such as user input, fetch data from API, etc.
   To define a state in functional component we use a hook like 
   useState, useEffect, useRef, useReducer, 
   useContext, useMemo & useCallback (these 3 introduced in v19)
  

Q. DEFINE HOOK IN REACT ?  (later about Hooks in details soon).
   React Hooks are functions enable functional components to state and other 
   react features without writing a class. The thing is react components were used 
   to be classes and they used something called lifecycle methods which were methods 
   that ran at specific times during the component rendering and now functional 
   components don't have life cycle methods as class so we use hooks that allows us 
   to do same thing as class components. At this stage of learning only useState 
   and useEffect will do the job. 

Q. WHAT IS GLOBAL STATE ?
   Relates to whole app not just single component, this would something like data 
   that we fetch from our database and want to share that with multiple components.
   For this we do something like paasing Golbal State from main component to child
   components to react context API or Redux a state management system. (These 
   Advance Topics of React which We shall see later) 

Q. WHAT KIND OR TYPES OF APPLICATIONS WE COULD BUILD USING REACT ?
      SPA - Single Page Applications loads a single html file namely index.html
            then it loads a JavaScript bundle that includes entire UI or app,
            basically content is loaded by javascript saving time. 

      SSR - SPAs could have some problems with SEOs or first time slow page load,
             so we could build a Server Side Rendered App which is done using
             Next.js which is the framework of React. Note SPA has no hosting
             limitations whereas SSRs can be hosted using vercel or netlify. 
*/
import React from "react";
import PrimeSeries from "./components/PrimeSeries";  // default import 
import { Footer, Header } from "./components/PrimeSeries"; // named import  

// Above combined Import and Export can be writtern as 
// import PrimeSeries, {Header, Footer} from .. 

export const App = () => {
   return (
   <> 
   <Header/> 
   <PrimeSeries/> 
   <Footer/> 
   </>
   );

};
/*   More about JSX ***
- Each JSX expression must have one parent element, which means if we try to retrun
  multiple elements, react will through error.
   
   Q. WHY CAN'T WE RETURN MULTIPLE ELEMENTS AT THE SAME TIME ? **
   In JSX everything is returned as object and even in plain JS one function
   can't return multiple values.
  
- Every JSX tag needs to be colsed. We can use self-closing tags for elements that 
  don't have children like img tag like this <img src="#" /> **

- Remember when we return we need to have one parent and if we have multiple 
  JSX codes then use () with return **

Q. WHAT IS REACT FRAGMENT AND WHY WE NEED REACT FRAGMENT ? (V. Imp.)
- In these code of a previous version   
  <div> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   <PrimeSeries/> 
   </div>
   We don't need the div which creates a extra node behind the scene which is 
   unecessary so we should use <React.Fragment> instead of div which we can get by 
   importing React from "react" library or simply use sugar react syntax <> </>  
*/




/* Import and Export  
   React is everything about components but here in our mini project put all the data
   in one App component. So we need separate these so that these can be used 
   again easily for that we use JS imports and exports  */