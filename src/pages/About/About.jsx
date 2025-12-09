import React from "react";
import './About.css'
import { MdMyLocation } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import img from "/images/dev.png"
export default function About(){


    return(
        <section className="About my-0 flex flex-col items-center justify-center bg-gray-100 pt-10">
            <h1 className="text-4xl font-semibold text-amber-500 max-md:text-2xl">About Us</h1>
            <div>
        <div className="flex w-full items-center gap-2 p-4 max-md:flex-col">
            <div className="flex w-1/2 flex-col max-md:mt-4 max-md:w-full">
            <p className="pl-20 text-justify indent-10 leading-relaxed text-blue-950 max-md:mx-0 max-md:px-10 max-md:text-sm max-md:leading-normal"> Our web development program is designed to take you from the basics to building fully functional websites and applications.</p>
            <p className="pl-20 text-justify indent-10 leading-relaxed text-blue-950 max-md:mx-0 max-md:px-10 max-md:text-sm max-md:leading-normal">We cover everything from front-end technologies like HTMLCSS, and JAVASCRIPT, to backend development and databases - giving you the completskill set of a full-stack developer. </p>
            <p className="pl-20 text-justify indent-10 leading-relaxed text-blue-950 max-md:mx-0 max-md:px-10 max-md:text-sm max-md:leading-normal">With experienced instructors and a hands-on learninapproach, you'll not only learn the theory but also gain practical experience by workinon real-world projects.</p>
            <p className="pl-20 text-justify indent-10 leading-relaxed text-blue-950 max-md:mx-0 max-md:px-10 max-md:text-sm max-md:leading-normal"> By the end of the course, you'll have a strong portfolio tshowcase your skills and the confidence to pursue a career in wedevelopment.</p>
            <div className="align-left ml-20 mt-4 gap-2 max-md:mx-2 max-md:text-sm">
                 <a href="/track" className="rounded-lg p-2 text-blue-950 hover:bg-amber-500 hover:text-white">Join us</a>
                 <span className="text-blue-950 max-md:text-sm"> and start your journey today!</span>
            </div>
           
            </div> 
            <div className="overflow:hidden h-1/2 w-1/2 p-4 max-md:h-full max-md:w-full">     
                <img src={img}  className="object-fit h-full w-full" alt="" />
            </div>    
        </div>
       
    </div>
        </section>
    )
}