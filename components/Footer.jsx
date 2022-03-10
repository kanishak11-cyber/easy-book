import React from "react";
import {
  FaTelegram,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="justify-center mx-10 text-white">
        <hr/>
      {/* icons */}
      <div className=" md:text-5xl text-3xl flex flex-row flex-1 my-2 justify-evenly text-center">
      <a href="https://facebook.com/" rel="noreferrer " target="_blank">
          <FaFacebook />
        </a>
      
        <a href="https://twitter.com/" rel="noreferrer " target="_blank">
          <AiFillTwitterCircle />
        </a>
        <a href="https://t.me/OfficialbabyKabosuinu" rel="noreferrer " target="_blank">
          <FaTelegram />
        </a>
        <a href="https://instagram.com" rel="noreferrer " target="_blank">
          <FaInstagramSquare />
        </a>
      </div>
      {/* end icons */}
      <div className=" text-center md:text-sm text-xs py-3 ">
          <hr/>
        <h1  className=''>
          Copyright © 2022 Easy Book. All Rights Reserved - Privacy Policy -
          Terms & Conditions
        </h1>
      </div>
    </div>
  );
};

export default Footer;
