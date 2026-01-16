import React from "react";
import './Footer.css'
import visa from '/images/eg.webp'
import Options from "./Options";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import logo from "/image/imgi_1030_5b0339e5-e2f3-4970-84ab-1ee4497cd9ca.png"
import logo from "/images/feature.webp"


export default function Footer(){

    return(
        <>
        <div className="Footer static bottom-0 left-0 my-auto w-full bg-gray-900 px-10 md:px-20">
        <div className="mx-auto mb-5 flex w-full flex-col items-center justify-center md:flex-row">
                    <div className="intouch my-5 w-full sm:w-full lg:w-1/3">
                             <a href="/"> <img src={logo} className="h-20 w-20" alt="" /></a>                        
                        </div>
                    <div className="media mt-5 w-full sm:w-full lg:w-1/3">
                                    <b className="text-center text-xl text-amber-500">Shop Media </b>
                                    <ul className="mt-4 flex gap-5 text-2xl">
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><TiSocialFacebook /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaTwitter /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaInstagram /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaLinkedin /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaGithub /></li>
                                    </ul>
                    </div>       
                
                    <div className="Login w-full sm:w-full lg:w-1/3">
                            {/* <b className="text-amber-500">Choose your country</b> */}
                            <Options />
                    </div>        
         </div>  
            <hr className= "flex items-center justify-center text-amber-300" />
          
                    <div className="mr-0 flex w-full flex-col items-center gap-4 py-5 md:flex-row md:justify-between md:px-20">
                    <p className="text-sm text-white md:text-lg"> Copywrite@<a className="text-amber-500 hover:text-amber-300" href="https://www.linkedin.com/in/menna-elbadry21/">Menna Elbadry</a> </p>
                      <div className="w-full sm:w-1/2 md:w-1/4">
                        <img src={visa} className="w-full" alt="" />
                      </div>
                    </div>   
</div>
</>
    )
}