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

export default HeadingComponent;
