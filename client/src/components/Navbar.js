import React from "react";
import { NavLink } from "react-router-dom";
import { WrenchScrewdriverIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import facebook from '../logo/facebook.jpg'
import twitter from '../logo/twitter.png'
import google from '../logo/google.jpg'
import linkedin from '../logo/linkedin.png'
import logo from '../logo/400JpgdpiLogo.jpg'

const Navbar = () => {
  return (
    <header>
      <div
      className="flex justify-center"
      >

                <img
             className="h-[200px]"
            src={logo}
            alt="Classic brass shower valve on a tiled wall in a victorian style bathroom"
          />
      </div>
      {/* <div className="flex"> */}
        {/* <div className="bg-blue-500 w-1/3 p-3 flex items-center px-5"> */}
          {/* <span className="text-white font-bold text-[13px] md:text-[18px] company">Only Drains</span> */}
        {/* </div> */}
        {/* <div className="bg-paleBlue w-2/3 p-3 flex justify-end items-center md:pr-20"> */}
          {/* socials dont need for this site */}
          {/* <div className='flex space-x-3'>
          <a href="https://www.facebook.com/profile.php?id=100063464694068&mibextid=ZbWKwL"
            target="_blank" rel="noreferrer" >
            <img className="circle" src={facebook} alt="facebook logo" />
          </a>
          <a href="https://mobile.twitter.com/GasaliAbass" target="_blank" rel="noreferrer">
            <img className="circle" src={twitter} alt="twitter logo" />
          </a>
          <a href=" https://www.instagram.com/invites/contact/?i=mi29glvkp6z6&utm_content=gwkaofn" target="_blank" rel="noreferrer">
            <img className="circle" src={google} alt="google logo" />
          </a>
          <a href="https://www.linkedin.com/in/abass-kasali-369911247" target="_blank" rel="noreferrer">
            <img className="circle" src={linkedin} alt="linkedin logo" />
          </a>
        </div> */}

        {/* </div> */}
      {/* </div> */}
      <div className="flex justify-center md:flex items-center justify-around  py-2 px-3 md:px-10 bg-white">
        <div className="md:flex md:flex-col items-baseline ">
          <NavLink to="/" className="link flex items-center">
          {/* <WrenchScrewdriverIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-500" /> */}
          <span className="md:text-2xl  text-blue-900 font-bold">Chandler P. Ostler</span>
          </NavLink>
          <p className="text-sm">Drain Specialist</p>
        </div>

          <div className="flex md:space-x-20 space-x-5">
            <span className="border border-blue-400 p-2">
              <a href="tel:+13852299779">
                <PhoneIcon  className="h-6 w-6 text-blue-400" />
                </a>
            </span>
            <div className="flex flex-col justify-center items-baseline">
                <p className="font-bold">Call or Text</p>
                <a href="tel:+13852299779" className="text-sm grey">385-229-9779</a>
            </div>
          </div>

        <div className="hidden md:flex space-x-3 items-center">
          <div  className="flex space-x-3 items-center">
            <span  className="border border-blue-400 p-2">
            <a href="mailto:onlydrains@gmail.com">
                <EnvelopeIcon  className="h-6 w-6 text-blue-400" />
              </a>
            </span>
            <div  className="flex flex-col justify-center items-baseline">
              <p  className="font-bold">Email us</p>
              <a href="mailto:onlydrains@gmail.com" className="text-sm grey">OnlyDrainsUtah@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex justify-center  items-center
        bg-paleBlue px-3  md:pr-0
       text-white mx-auto text-[12px] md:text-[15px] font-bold">
      </nav>
    </header>
  )
}

export default Navbar
