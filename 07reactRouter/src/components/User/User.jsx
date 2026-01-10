import React ,{useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userid} = useParams()
    const [data,setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/rishipatel83')
      .then(response => response.json())
      .then(data=>{
        setData(data)
      })
    })
    
  return (
    <div className= ' text-center bg-gray-600 text-white text-3xl p-4 m-4'>
      User: {userid}
      <img src={data.avatar_url} alt="Rishi's Github Image" width={300}/>
    </div>
  )
}

export default User
