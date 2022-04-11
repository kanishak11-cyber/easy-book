import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import taj from '../assets/taj.png'
import About from './About'
import Link from 'next/link'
// import up from "../assets/up.jpg";

const Welcome = () => {
  const [stateItem, setStateItem] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/heritage')
        const data = await response.json()
        setStateItem(data.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="flex ex">
      {stateItem.map((st, index) => (
        <div key={index} className='mt-5 m-10'>
          <div className="card ">
            <Image src={st.placeImage} alt="" layout="fill" />
            <div className="content">
              {' '}
              <h1 className="text-xl">{st.placeName}</h1>
              <p>{st.placeDescription}</p>
            </div>
          </div>
          <div className='justify-between text-center text-white'>
            <button className='text-lg bg-yellow-400 animate-none px-3 mx-1 my-3 rounded-xl hover:bg-yellow-600' onClick={()=>{<About/>}}>About</button>
            <Link href='/cart/Cart'>
              <button className='text-lg bg-green-400 animate-none px-3 mx-1 my-3 rounded-xl hover:bg-green-600' >buy ticket</button>

              </Link>
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default Welcome
