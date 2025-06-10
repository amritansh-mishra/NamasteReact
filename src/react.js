/* const heading = React.createElement("h1" , {} , "Hello World React" );
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(heading); 
*/

 /**                                   HOW TO CREATE NESTED ELEMENT
  
   
   
  * <div id="parent">
  *      <div id=" child">
  *           <h1>"I'm here</h1> 
  *     </div>
  * </div>
  */


/* const parent = React.createElement("div",
     {id: "parent"} ,
    React.createElement("div", 
        {id:"child"},
           React.createElement("h1", {} , "I'm here" )));
 console.log(parent);

 root.render(parent);
 */

/*

React element

const heading = ( <h1 className="head" tabIndex="5"> Namaste React using jsx </h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

*/



//                                            Method 1 to use props


/* const Restrauntcard = () => {  to understand how to use props          
  return(
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
         +restrolist[0].info?.cloudinaryImageId}/>
      <h2>{restrolist[0].info?.name}</h2>
      <h3>{restrolist[0].info?.cuisines.join(", ")}</h3>
      <h4>{restrolist[0].info?.avgRating} Stars</h4>

    </div>
  )

}
either you can use (props) or ({restraunt}) in the function parameter.
*/ 

//                                            Method 2 to use props


/*
const Restrauntcard = ({restraunt}) => {  
  
  const {name, cuisines, avgRating, cloudinaryImageId} = restraunt.info;

  return(
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
         +cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>

    </div>
  )

}

//props = properties
const Body =() =>{
  return (
   <div className="restro-list">
    <Restrauntcard restraunt = {restrolist[0]}/>
    <Restrauntcard restraunt = {restrolist[1]}/>
    <Restrauntcard restraunt = {restrolist[2]}/>
    <Restrauntcard restraunt = {restrolist[3]}/>
    <Restrauntcard restraunt = {restrolist[4]}/>
    <Restrauntcard restraunt = {restrolist[5]}/>
   </div>
  )
}
*/


/*                                           Method 3 to use props

const Restrauntcard = ({name, cuisines, avgRating, cloudinaryImageId}) => {  
  
  return(
    <div className="card">
      <img src={IMG_CDN+cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>

    </div>
  )

}
*/

import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
//export default
import HeadingComponent from "./components/HeadingComponent";
// exporting by name 
import {Title} from "./components/HeadingComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN } from "./config";
import Restrauntcard from "./components/Restrauntcard";

const AppLayout =() => {
  return(
    <>
      <HeadingComponent/>
      <Body/>
      <Footer/>

    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



 


 

 