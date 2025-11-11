import React from "react";
import './About.css'
import { MdMyLocation } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import img from "/images/programmer.webp"
export default function About(){


    return(
        <section className=" About pt-10 my-0 flex flex-col items-center justify-center bg-gray-200">
            <h1 className=" text-amber-500 font-semibold text-4xl max-md:text-2xl">About Us</h1>
            <div>
        <div className="flex max-md:flex-col  gap-2 p-4 items-center w-full ">
            <div className=" flex flex-col max-md:w-full w-1/2 max-md:mt-4">
            <p className="indent-10 leading-relaxed text-justify text-blue-950  pl-20 max-md:px-10 max-md:mx-0 max-md:leading-normal max-md:text-sm"> Our web development program is designed to take you from the basics to building fully functional websites and applications.</p>
            <p className="indent-10 leading-relaxed text-justify text-blue-950  pl-20 max-md:px-10 max-md:mx-0 max-md:leading-normal max-md:text-sm">We cover everything from front-end technologies like HTMLCSS, and JAVASCRIPT, to backend development and databases - giving you the completskill set of a full-stack developer. </p>
            <p className="indent-10 leading-relaxed text-justify text-blue-950  pl-20 max-md:px-10 max-md:mx-0 max-md:leading-normal max-md:text-sm">With experienced instructors and a hands-on learninapproach, you'll not only learn the theory but also gain practical experience by workinon real-world projects.</p>
            <p className="indent-10 leading-relaxed text-justify text-blue-950  pl-20 max-md:px-10 max-md:mx-0 max-md:leading-normal max-md:text-sm"> By the end of the course, you'll have a strong portfolio tshowcase your skills and the confidence to pursue a career in wedevelopment.</p>
            <div className=" gap-2 mt-4 ml-20 align-left max-md:mx-2 max-md:text-sm ">
                 <a href="/track" className="p-2 rounded-lg text-blue-950 hover:bg-amber-500 hover:text-white">Join us</a>
                 <span className="text-blue-950  max-md:text-sm"> and start your journey today!</span>
            </div>
           
            </div> 
            <div className="max-md:w-full w-1/2 p-4 overflow:hidden">     
                <img src={img}  className=" w-full h-full" alt="" />
            </div>    
        </div>
       
    </div>
        </section>
    )
}