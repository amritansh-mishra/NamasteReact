import { restrolist } from "../utils/config";
import Restrauntcard from "./Restrauntcard";
import { useState, useEffect } from "react";
import Shimmer from "./Schimmer";

//props = properties

const Body =() =>{

  // searchText is a state variable, but it is not being updated correctly in the input field.
  // To make it work , we should use the useState hook to manage the state of searchText.

  const [searchTxt, setSearchTxt] = useState(" ");
  return ( 
  <> 
  
    <div className="Search-container">
      <input                                                          
       type="text " className="search-input" placeholder="Search" value={searchTxt}

        //value is the current value of the input field
        //onChange is an event handler that is called when the value of the input field changes

        onChange={(e) => {
          setSearchTxt(e.target.value);
        }}
       />
       
      <button className="Search">Search</button>
    </div>


   <div className="restro-list">
    {
      restrolist.map((restro) => (
        <Restrauntcard key={restro.info.id} {...restro.info}/>
      ))
    } 
   </div>

   
  </>
  )
  
};

export default Body;