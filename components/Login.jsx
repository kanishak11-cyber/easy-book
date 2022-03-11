import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sawo from "sawo"
const Login=()=>{
    const [isLogin,setIsLogin]=useState(false);
    useEffect(()=>{
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: "sawo-container",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "phone_number_sms",
            // Add the API key copied from 2nd step
            apiKey: "c1669eee-78ae-4c52-b68d-522339197c69",
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {
                
            },
        };
        let sawo = new Sawo(config)
        sawo.showForm()
    },[])
    return(
        <div id="sawo-container" 
        style={{height:"300px", width:"400px"}}>
        </div>
    );
};

export default Login;

