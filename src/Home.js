import React from 'react'
import { Link  } from 'react-router'

const Home = () => {
  console.log('home') 
  return(
    <div>
      <p>Homeeeeeee</p>

      <Link to="blabla">go to Not Found</Link>
    </div>
  )
}

export default Home
