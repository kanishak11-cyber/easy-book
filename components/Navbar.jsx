import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import book from '../assets/logo.svg'
import Image from 'next/image'
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    //  <header className="bg-gradient-to-r from-[#eb79b8]  to-[#eba63f]  text-white ">
    <header className="text-white ">
      <nav className="flex w-full  items-center   justify-between p-4">
        <div className="z-10 flex-initial items-center justify-between bg-transparent  md:flex-[0.5]">
          <div className="flex flex-row items-center justify-center ">
            <a href="/">
              <div className="align-center  w-48 items-center justify-center">
                <Image
                  src={book}
                  alt="logo"
                  className="items-center justify-center "
                  width={400}
                  height={100}
                />
              </div>
            </a>

            {/* <h1 className="text-[28px]  text-center  ">
              <a href="/">
              Easy Book 
              </a>
            </h1> */}
          </div>
        </div>
        <div className="hidden flex-row items-center  text-white  md:flex ">
          <div className="navbar-brand flex flex-row  items-center justify-evenly">
            <a href="/" className="block justify-center scroll-smooth text-lg">
              <div className="justify-items-center px-2 hover:text-[#fdfd96]">
                Home
              </div>
            </a>
            <a href="/myticket" className="justify-center text-lg">
              <div className="justify-items-center px-2 hover:text-[#fdfd96]">
                My Ticket
              </div>{' '}
            </a>
            <a href="/cart" className="justify-center text-2xl">
              <div className="justify-items-center px-2 hover:text-[#fdfd96]">
                <FaShoppingCart />
              </div>{' '}
            </a>

            <a
              href="/signin"
              className="justify-center text-lg"
              // target={"_blank"}
              // rel="noopener noreferrer"
            >
              <div className="justify-items-center px-2">Login</div>
            </a>
          </div>
          <hr />
        </div>
        <div className="relative flex">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="cursor-pointer text-white md:hidden"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="cursor-pointer text-white md:hidden"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="hrefp-0 blue-glassmorphism animate-slide-in fixed -right-2 z-10 flex h-screen w-[50vw] list-none
                flex-col items-center justify-start rounded-md p-3 text-white shadow-xl md:hidden"
            >
              <li className="my-2 w-full text-xl">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <div className=" items-center">
                <a
                  href="/"
                  className="block justify-center scroll-smooth text-lg"
                >
                  <div className="justify-items-center px-2 hover:text-[#fdfd96]">
                    Home
                  </div>
                </a>
                <a href="/myticket" className="justify-center text-lg">
                  <div className="justify-items-center px-2 hover:text-[#fdfd96]">
                    My Ticket
                  </div>{' '}
                </a>
                <a href="/cart" className="justify-center text-2xl">
                  <div className="justify-items-center px-2 hover:text-[#fdfd96]">
                    <FaShoppingCart />
                  </div>{' '}
                </a>

                <a
                  href="/signin"
                  className="justify-center text-lg"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  <div className="justify-items-center px-2">Login</div>
                </a>
              </div>
            </ul>
          )}
        </div>
     
        {/* <hr /> */}
      </nav>
         <hr className="w-[80vw] justify-center mx-36"/>
    </header>
  )
}

export default Navbar
