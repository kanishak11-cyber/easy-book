import Image from "next/image";
import React, { useEffect, useState } from "react";

const Book = () => {
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
        <div className="flex ">
          {stateItem.map((st, index) => (
            <div key={index} >
            <div className="card">
                <Image src={st.placeImage} alt=""  layout='fill'/>
                <div className="content"> <h1 className="text-xl">{st.placeName}</h1>
                    <p>{st.placeDescription}</p>
                </div>
                </div>
    
            </div>
          ))}
         
        </div>
      );
    };
    
    export default Book;
    