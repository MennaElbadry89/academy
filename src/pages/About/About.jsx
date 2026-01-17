import React from "react";
import './About.css'
import { MdMyLocation } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import img from "/images/dev.png"
export default function About(){

const navigate = useNavigate();
    return(
        <section className="About my-0 flex flex-col items-center justify-center bg-gray-100 p-10">
            <h1 className="text-2xl font-semibold text-amber-500 md:text-4xl">About Us</h1>
        <div>
        <div className="mx-0 flex w-full flex-col items-center gap-10 p-4 md:flex-row">
            
             <div className="overflow:hidden h-full w-full p-0 md:h-1/2 md:w-1/4 md:p-4">     
                <img src={img}  className="object-fit h-full w-full" alt="" />
            </div>
            
            <div className="sm:text-md mt-0 flex w-full flex-col text-justify text-sm leading-normal md:mt-4 md:w-3/4 md:text-lg md:leading-relaxed">

            <p className="indent-10 text-blue-950"> Our web development program is designed to take you from the basics to building fully functional websites and applications.</p>
            <p className="indent-10 text-blue-950">We cover everything from front-end technologies like HTMLCSS, and JAVASCRIPT, to backend development and databases - giving you the completskill set of a full-stack developer. </p>
            <p className="indent-10 text-blue-950">With experienced instructors and a hands-on learning approach, you'll not only learn the theory but also gain practical experience by working on real-world projects.</p>
            <p className="indent-10 text-blue-950"> By the end of the course, you'll have a strong portfolio to showcase your skills and the confidence to pursue a career in web development.</p>
            <div className="sm:text-md mx-2 gap-2 text-sm text-blue-950 md:text-lg">
                 <button onClick={() => navigate("/track")} className="cursor-pointer font-bold hover:text-amber-500">Join us</button>
                 <span className=""> and start your journey today!</span>
            </div>
           
        </div>                
        </div>       
    </div>
</section>
    )
}