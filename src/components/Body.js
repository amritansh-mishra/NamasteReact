import { restrolist } from "../config";
import Restrauntcard from "./Restrauntcard";
import { useState } from "react";

//props = properties

const Body =() =>{

  // searchText is a state variable, but it is not being updated correctly in the input field.
  // To make it work , we should use the useState hook to manage the state of searchText.

  const [searchTxt, setSearchTxt] = useState("Search Here");

  return ( 
  <> 
    <div className="Search-container">
      <input                                                          
       type="text "
       className="search-input"
       placeholder="Search" 
       value={searchTxt}
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