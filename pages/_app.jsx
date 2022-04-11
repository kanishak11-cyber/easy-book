import '../styles/globals.css'
import React, { useState } from 'react'
// import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import book from '../assets/logo.svg'
import Image from 'next/image'
// import NavLink from 'next/link'
// import Signin from './signin/Signin'

import {
  FaTelegram,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from 'next/link'
const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: `ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem]  border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

function MyApp({ Component, pageProps }) {

  return (
  
    <div className='bg-[#04111d] '>
      <nav>
        {/* <header > */}
      <div className={style.wrapper}>
        <Link href="/">
          <div className={style.logoContainer}>
            <Image src={book} height={40} width={100} />
            <div className={style.logoText}>EasyBook</div>
          </div>
        </Link>

        <div className={style.searchBar}>
          <AiOutlineSearch />
          <div className={style.searchIcon}>

          <input
            type="text"
            className={style.searchInput}
            placeholder="Search "
          />
          </div>
        <div>

        <div className={style.headerItems}>
          <Link href="/">
            <div className={style.headerItem}>Home</div>
          </Link>
          <Link href="/ticket/TicketCard">
            <div className={style.headerItem}>MyTicket</div>
          </Link>
          <Link href="/cart/Cart">
            <div className={style.headerItem}>
              <FaShoppingCart />
            </div>
          </Link>
          <Link href="/scanner/Scanner">
            <div className={style.headerItem}>Scanner</div>
          </Link>
          <Link href="/login/Login">
            <div className={style.headerItem}>Login</div>
          </Link>
        </div>
      </div>

      </div>
      {/* <nav className="flex w-full  items-center   justify-between p-4"> */}
    </div>

      </nav>
      <Component {...pageProps} />
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
    </div>
  
  )
}

export default MyApp
