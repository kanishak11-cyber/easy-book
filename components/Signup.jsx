import React from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Link } from "next/link";
import Signin from "./Signin";
const Signup = () => {
  return (
    <div className="h-full">
      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
           
            <div className="line-4 border rounded-xl justify-center mx-20 my-10  px-10 py-10 items-center  ">
            <div>
              <h1 className="text-center text-3xl  font-Roboto">SIGN UP</h1>
            </div>
              <div className="flex flex-col flex-1  ">
                <form className="form-group flex flex-col text-center items-center my-2 flex-1">
                  {/* <label className="text-right ">Email / Phone / UserName</label> */}
                 
                  <div className=" flex flex-row px-3  items-center border-b-2 ">
                     <FaUserAlt />
                    <input
                      type="text"
                      className="bg-transparent py-3 px-1"
                      placeholder="NAME"
                    />
                  </div>

                  {/* <label className="my-2">Password</label> */}
                  <div className=" flex flex-row px-3  items-center border-b-2 ">
                    <input
                      type="text"
                      className="bg-transparent py-3 px-1"
                      placeholder="PHONE NUMBER"
                    />
                    
                  </div>
                  <div className=" flex flex-row px-3  items-center border-b-2 ">
                    
                    <input
                      type="email"
                      className="bg-transparent py-3 px-1"
                      placeholder="EMAIL"
                    />
                  </div>
                  
                  
                  <div className=" flex flex-row px-3  items-center border-b-2 ">
                    
                    <input
                      type="text"
                      className="bg-transparent py-3 px-1"
                      placeholder="NATIONALITY"
                    />
                  </div>
                  

                  <button className=" w-3/4 my-3 ">
                    <h1 className=" border-2 px-3 my-2  py-1 rounded-full">SEND OTP</h1>
                  </button>
                  <div className=" flex flex-row px-3  items-center border-b-2 ">
                    <input
                      type="text"
                      className="bg-transparent py-3 px-1"
                      placeholder="ENTER OTP"
                    />
                    
                  </div>
                  
                  {/* <h1 className="text-xs text-start">Forget PassWord?</h1> */}
                  <button className="   w-3/4 my-3">
                    <h1 className="border-2 px-3 mt-2  py-1 rounded-full">CONFIRM </h1>
                  </button>
                </form>
              </div>
              <Link to='/signin' ><h1>Already have account</h1></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
