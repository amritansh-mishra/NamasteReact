import React from "react";
import ReactDOM from "react-dom/client";

/* const heading = React.createElement("h1" , {} , "Hello World React" );
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(heading); 
*/

 /**                                   HOW TO CREATE NESTED ELEMENT
  * 
  * 
  * 
  * <div id="parent">
  *      <div id=" child">
  *           <h1>"I'm here</h1> 
  *     </div>
  * </div>
  * 
  * 
  * 
  * 
  */


/* const parent = React.createElement("div",
     {id: "parent"} ,
    React.createElement("div", 
        {id:"child"},
           React.createElement("h1", {} , "I'm here" )));
 console.log(parent);

 root.render(parent);
 */




// JSX - HTML like or XML like syntax.

/*
/ React element
const heading = ( 
    <h1 className="head" tabIndex="5">
      Namaste React using jsx
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/


//React Functional component
const HeadingComponent = () => {
  return (
    <h1> Namaste React functional component </h1>
  );
};
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);



 


 

 