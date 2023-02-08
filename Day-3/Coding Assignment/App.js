import React from "react";
import ReactDOM from "react-dom/client";



const heading3 = <h2>Heading</h2>
    
const root = ReactDOM.createRoot(document.getElementById("root"));
    
const heading = (
  <h1 id="title" key="h2">
    React Element
  </h1>
)

const body = (
  <h2 id="body" key="2">
    Body Element
  </h2>
)

const body2 = (
  <h2 id="body" key="2">
    Body Element2
  </h2>
)

const footer = (
  <p id="footer" key="3">
    This is a paragraph.
    Just to check if it automatically reloads.
    Does it reloads? I guess, and it does.
  </p>
)

const footer2 = (
  <p id="footer" key="3">
    This is a paragraph.
    Just to check if it automatically reloads.
    Does it reloads? I guess, it doeeeeeeees.
  </p>
)

const apple = (
  <p>Apple</p>
)


const HeaderComponent2 = () => {

  return (
    <div>
      {heading}
      <h1>React Functional Component 2</h1>
      {body}
      {body2}
      {footer}
      {footer2}
  
    </div>
    
  )

};

root.render(<HeaderComponent2 />) ;
