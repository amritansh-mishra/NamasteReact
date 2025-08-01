import { useState } from "react";

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

  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <Title />                  
      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li> About</li>
          <li> Contact</li>
          <li> Cart</li>
          <button className="login"
          onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") :
            setBtnNameReact("Login");
            //if btnNameReact is Login, then set it to Logout
            //if btnNameReact is Logout, then set it to Login
            //this is called toggling
            //this is a ternary operator
            //if condition ? true : false
          }}
          >
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
    
  );
};

export default HeadingComponent;
