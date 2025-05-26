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

import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

//JSX

const Title = () => (
  <a href="/">

<img 
 className="logo"
 alt= "logo" 
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDO71vDJJ3V3gQrmwYj2ANviQAdX9gIqw0g&s">
 </img>

  </a>
);
 

//React Functional component
const HeadingComponent = () => {
  return (
    <div className="header">
      <Title />                  
      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li> About</li>
          <li> Contact</li>
          <li> Cart</li>
        </ul>
      </div>
    </div>
    
  );
};

const restrolist =[
                  {
                    "info": {
                      "id": "634127",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/b438b8c9-3936-4d98-87dd-145d83386d37_634127.JPG",
                      "locality": "Bhartiya Mall",
                      "areaName": "Yelahanka",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.5K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d34007ce-671f-4adf-ae70-0371354a0f28"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/subway-bhartiya-mall-yelahanka-rest634127",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "573085",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/84fe5303-ff3c-47c3-b910-d14b0a64b048_573085.JPG",
                      "locality": "MCH Layout",
                      "areaName": "Jakkur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5.0K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-26 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹53"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d34007ce-671f-4adf-ae70-0371354a0f28"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-mch-layout-jakkur-rest573085",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "395901",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/049d0ddb-f0bc-40de-8af3-d77e685b416f_395901.JPG",
                      "locality": "Muniswappa Layout",
                      "areaName": "Geddalahalli",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "630",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.9K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-27 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d34007ce-671f-4adf-ae70-0371354a0f28"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-muniswappa-layout-geddalahalli-rest395901",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "518647",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/4169c359-a767-419c-8dd3-b590bb40dad8_518647.jpg",
                      "locality": "Kothanur",
                      "areaName": "Kothanur",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "6.1K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-27 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d34007ce-671f-4adf-ae70-0371354a0f28"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-kothanur-rest518647",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "264699",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/87802d55-77f8-4f34-b26b-463cf613b36d_264699.JPG",
                      "locality": "R Muniswappa Layout",
                      "areaName": "Hennur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2456",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "6.5K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-26 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d34007ce-671f-4adf-ae70-0371354a0f28"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-r-muniswappa-layout-hennur-rest264699",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "648847",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "K R Puram",
                      "areaName": "Hennur",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "61955",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "2.8K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-27 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d34007ce-671f-4adf-ae70-0371354a0f28"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chinese-wok-k-r-puram-hennur-rest648847",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "271237",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/4f7ad164-df8e-4ad6-b41c-4a894d259ccb_271237.jpg",
                      "locality": "bagalur road",
                      "areaName": "Kothanur",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "7918",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "989",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-05-26 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d34007ce-671f-4adf-ae70-0371354a0f28"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-bagalur-road-kothanur-rest271237",
                      "type": "WEBLINK"
                    }
                  },
];

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


//                                            Method 3 to use props

const Restrauntcard = ({name, cuisines, avgRating, cloudinaryImageId}) => {  
  
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
    {
      restrolist.map((restro) => (
        <Restrauntcard key={restro.info.id} {...restro.info}/>
      ))
    }
    
   </div>
  )
}

const Footer =() =>{
  return (
    <h4>
      Footer
    </h4>
  )
}

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



 


 

 