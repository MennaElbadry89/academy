// import './Navbar.css'
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import logo from "/images/feature.webp"
import { useState, useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { authContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { CountryContext } from "../../context/CountryContext";

import { clsx } from 'clsx';


export default function Navbar(){

const navigate = useNavigate()

const[open , setOpen] = useState(false)
const[isOpen , setIsOpen] = useState(false)
  
const {country ,selected , setSelected } = useContext(CountryContext);
const { cartCount } = useContext(CartContext);
const {loading , currentUser , loadingDisplayCurrentUser , logout} = useContext(authContext)
const [openn, setOpenn] = useState(false)
const[exist , setExist] = useState(false)

// const countryData = country.find((c)=> 
//   c.name.common === selected );

let countryData = null;
if (selected) {
  // Footer Options sets selected to the whole country object (with name, flag).
  if (typeof selected === 'object') {
    countryData = selected;
  } else if (Array.isArray(country)) {
    // Support several country data shapes: { name: 'X' } or { name: { common: 'X' }, cca2, cca3, flags }
    countryData = country.find(c =>
      (typeof c?.name === 'string' && c.name === selected) ||
      c?.name?.common === selected ||
      c?.cca2 === selected ||
      c?.cca3 === selected
    );
  }
}
  

return(
    <>
    <nav className="z-100 relative flex justify-between bg-gray-900 px-10 py-2 shadow-lg md:items-center">
        <div className="text-shadow-lg pr-5 text-xl text-amber-500">
            <a href="/"><img src={logo} width={40} height={40} alt="" /></a>
        </div>          
           <div className={clsx(
            isOpen ? "flex" : "hidden",
           " top-15 z-50 absolute left-0 w-full flex-col gap-5 bg-gray-900 p-5",
           " md:static md:flex md:flex-row md:items-center md:justify-between")}>
            <ul className="flex flex-col gap-5 sm:flex sm:flex-row">
               <li className="hover:font-semibold"><a className="px-5 text-amber-500 hover:text-amber-300" href="/">Home</a></li> 
               <li className="hover:font-semibold"><a className="px-5 text-amber-500 hover:text-amber-300" href="about">About</a> </li>           
               <li className="hover:font-semibold"><a className="px-5 text-amber-500 hover:text-amber-300" href="contact">Contact</a> </li>           
               <li className="px-5 text-amber-500 sm:hover:font-semibold"
               onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} >
                    <button  onClick={()=>setOpen(!open)}><span className="cursor-pointer hover:text-amber-300"> Menu </span></button>
                   { open && (
                    <div > <ul className="absolute top-40 bg-gray-900 shadow-lg sm:top-10"> 
                    <li ><a className="flex gap-2 px-10 py-2 hover:border hover:border-gray-800 hover:text-amber-500 hover:shadow" href="team"><IoIosPersonAdd/> Team </a></li>
                    <li ><a className="flex gap-2 px-10 py-2 hover:border hover:border-gray-800 hover:text-amber-500 hover:shadow" href="track"><GrHelpBook/> Tracks </a></li>
                    </ul></div>
                  )} 
                   </li>                    
            </ul>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
               { 
     loadingDisplayCurrentUser?
     <div className="">
      { loading ?
     <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
      : "" }
     </div>
     :
     !loadingDisplayCurrentUser && !currentUser ?
      <div className="authHandeler flex gap-5 px-5">
      <button className="cursor-pointer text-amber-500 hover:text-amber-300"><a href="/register">Register</a></button>
      <button className="cursor-pointer text-amber-500 hover:text-amber-300"><a href="/login">Login</a></button>
     </div>
      :
    <div className="absolute right-20 top-[-45px] md:right-40 md:top-5">
    <button onClick={()=>setExist(!exist)} className="mr-5">
      <div className="flex items-center justify-center gap-2">
       { countryData ? ( <img src={countryData?.flags?.png || countryData?.flags?.svg || countryData?.flag} alt={countryData?.name?.common || selected}  className="h-8 w-8 rounded-full"/>)  
        :(<span className="text-amber-300">welcome</span>)} <span className="cursor-pointer text-amber-500 hover:text-amber-300">{currentUser.firstname}</span></div>
    </button>
    {exist && (
     <ul className="absolute right-0 top-12 w-32 rounded bg-gray-900 shadow-md">
    <li ><a href={'/profile'} className="p-2 text-center text-amber-500 hover:font-bold hover:shadow" >Profile</a></li>
    <li ><a href={'/orders'} className="my-1 p-2 text-center text-amber-500 hover:font-bold hover:shadow" >Orders</a></li>
    <li ><button className="cursor-pointer p-2 text-center text-amber-500 hover:font-bold hover:shadow" onClick={()=>setOpenn(true)}>Logout</button>
              { openn && ( 
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/30">
                      <div className='flex w-1/4 flex-col gap-5 rounded-xl bg-white p-10'>
                      <h2 className='text-center font-semibold text-blue-950'>Are u sure to exit ?!</h2>
                      <div className='flex justify-center gap-2'>  
                      <button className="rounded-xl bg-red-700 p-2 text-sm text-white hover:bg-red-500"
                          onClick={logout}>Close</button>
                            <button className="rounded-xl bg-green-700 p-2 text-sm text-white hover:bg-green-500"
                          onClick={()=>setOpenn(false)}>Cancel</button>
                          </div>
                      </div>
                    </div>
                  )
                  }   
    </li>
    </ul>
  )}
   </div>
    }
    
     <button onClick={()=>navigate('/cart')} className="flex cursor-pointer px-5 text-lg text-amber-500 hover:text-amber-300">
        <FaCartArrowDown />
        <sup>{currentUser? cartCount : ""}</sup>
      </button> 
    </div>             
    </div>
      <div>
          <button  onClick={(()=> setIsOpen(!isOpen))} >
          <IoMdMenu className="hidden cursor-pointer text-4xl text-amber-700 hover:text-amber-500 max-md:flex"/></button>   
       </div>    
   
</nav>
</>
)
}