import { IMG_CDN } from "../utils/config";

const Restrauntcard = ({name, cuisines, avgRating, cloudinaryImageId,costForTwo,totalRatingsString}) => {  
  
  return(
    <div className="card">
      <img src={IMG_CDN+cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h5>Total Rating: {totalRatingsString}</h5>

    </div>
  )

}

export default Restrauntcard;