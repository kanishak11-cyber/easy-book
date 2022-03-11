import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import book from '../assets/logo.svg'
import Image from 'next/image'
import NavLink from 'next/link'
import Signin from './signin/Signin'
import Link from 'next/link'
// import { Link } from "react-router-dom";
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
const Navbar = () => {
  
  return (
    //  <header className="bg-gradient-to-r from-[#eb79b8]  to-[#eba63f]  text-white ">
    <div className=" text-white ">
      <div className={style.wrapper}>
        <Link href="/">
          <div className={style.logoContainer}>
            {/* <Image src={book} height={40} width={100} /> */}
            <div className={style.logoText}>EasyBook</div>
          </div>
        </Link>
        
          <div className={style.searchBar}>
            {/* <AiOutlineSearch /> */}
          {/* <div className={style.searchIcon}> */}
            
         
          <input
            type="text"
            className={style.searchInput}
            placeholder="Search "
          />
       {/* </div> */}
        </div>
        
        <div className={style.headerItems}>
          <Link href="/">
            <div className={style.headerItem}>Home</div>
          </Link>
          <Link href='/ticket/TicketCard'>
          <div className={style.headerItem}>MyTicket</div></Link>
          <div className={style.headerItem}>
            <FaShoppingCart />
          </div>
          <div className={style.headerItem}>Login</div>
        </div>
      </div>

      {/* <nav className="flex w-full  items-center   justify-between p-4"> */}
    </div>
  )
}

export default Navbar
