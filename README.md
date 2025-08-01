Practicing React with Akashay Saini

# Parcel
 - Dev Build 
 - Local Server 
 - HMR = Hot module Replacement (reloading and updating the website as we save the file)
 - Uses file watching the algorithim 
 - Caching - faster builds
 - Does image optimisation for us.
 - Minification of file 
 - Building 
 - Compressing 
 - Consistet Hashing 
 - Code Splitting
 - Diffrential Bundeling - so that our app runs on older browser.
 - Error handling 
 - can be run on HTTPs.
 - Tree shaking - removes unecessary/unused code.
 - Browsers list - used in (package.json) , "browserslist": [list of browsers] (it's an array).

# JSX

 - JSX - HTML like or XML like syntax.

 - JSX (transpiled before it reaches the js) - PARCEL does this - BABEL(Js compiler) - converts JSX to JS.

 - JSX => Babel transpiles it to React.createElement => Reactelement -JS object => HTMLElement(Render).

 - JSX element must have one parent element.
 
# Inline styling in react 
 
 -      const jsx = (
        <div style={{backgroundColour: "red"}}>  
        hi
        </div>
        )

# How to insert words in Search bar in react. 
## What is State?
 - 

## What is HOOKS?
 - it's just a normal js utility functions.

## What is Usestate?
 - To create state variables. It comes from react library , we import it using a name variable.
     
       const [ searchTxt ] = useState(); 

- this fucntion returns a array , the first element of the array is the varibale name.
- searchtxt is a local state variable.

      const [searchTxt, setsearchTx] = useState();

## How Do I modify my variable (searchTxt)?
 - by doing
       value={searchTxt}
        onChange={(e) => {
         setSearchTxt(e.target.value)
        }}
       
 - e.target.value = whatever we write in input.
 - setSearchTxt(e.target.value) will modif the searchTxt variable.

 ## useEffect()
 - takes two arguments- (i) Callback function (ii) Dependency Array
 




