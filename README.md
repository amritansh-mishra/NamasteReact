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


