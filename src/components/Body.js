//props = properties
import { restrolist } from "../config";
import Restrauntcard from "./Restrauntcard";
const Body =() =>{
  return (
   <div className="restro-list">
    {
      restrolist.map((restro) => (
        <Restrauntcard key={restro.info.id} {...restro.info}/>
      ))
    }
    
   </div>
  )
};

export default Body;