// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
//   const [count, setCount] = useState(0)
   // const myObj = {
   //    username: "rishi",
   //    age: 20
   // }
   // const myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-2xl p-4 mb-4 '>Tailwind Test</h1>
      <div className='flex space-x-2 '>
         <Card username = "RISHI" btnText = "Click Me" img = "https://avatars.githubusercontent.com/u/176732887?v=4" />
         <Card username = "HITESH"/>
      </div>
    </>
  )
}

export default App
