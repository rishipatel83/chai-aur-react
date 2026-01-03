import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//* bable use to convert this JavaScriptXML (JSX) to into standard JavaScript before it goes to the browser

// function MyApp(){
//    return(
//       <div>
//          <p>a para</p>
//       </div>
//    )
// }

//* we can't pass it like we passed in our customReact given below because react follows some kind of a syntax for it written just below the code by React.createElement

//* following given is the way how the created element is converted before going into the browser with some keys and references

// const reactElement = {
//    type: 'a',
//    props: {
//       href: "https://google.com",
//       target: '_blank'
//    },
//    children: "Click me to visit Google"
// }

// const another = 'chai aur react'

// const reactElement = React.createElement(     //* bable injects this element we created; bable is a transpiler : source code in github of facebook/react/packages/src you can find it further more

//    'a',
//    {href:"https://google.com",target:"_blank"},
//    "click me to visit google",
//    another
// )

//* The bellow given element is in JSX and it is further converted into standard JavaScript by bable in the form of above given element like we created reactElement

const anotherElement = (
   <a href="https://google.com" target="_blank">Visit Google</a>
)

createRoot(document.getElementById('root')).render(

   // <MyApp/>
   // <App/>
   anotherElement
   // reactElement
)
