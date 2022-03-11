import React, { useState, useEffect } from 'react'
import Carousel from 'nuka-carousel'
const Landing = () => {
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
    <div className="">
      <Carousel>
        {stateItem.map((st, index) => (
          <div key={index[0]}>
            <div className="w-screenh-[60vh]">
              <img src={st.placeImage} className="w-screen " />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Landing
