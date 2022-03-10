import Image from "next/image";
import React, { useEffect, useState } from "react";

// import up from "../assets/up.jpg";
import Heritage from "./Heritage";
const Welcome = () => {
  const [stateItem, setStateItem] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/db/heritage");
        const data = await response.json();
        setStateItem(data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="flex">
      {stateItem.map((st, index) => (
        <div key={index} >
        <div className="card">
            <Image src={st.placeImage} alt=""  layout='fill'/>
            <div className="content"> <h2>{st.placeName}</h2>
                <p>{st.placeDescription}</p>
            </div>
            </div>

          {/* <h1>{st.placeName}</h1>
          <h1>{st.placeDescription}</h1> */}
        </div>
      ))}
      <Heritage />
    </div>
  );
};

export default Welcome;
