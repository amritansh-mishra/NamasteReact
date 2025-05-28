import { IMG_CDN } from "../config";

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

export default Restrauntcard;