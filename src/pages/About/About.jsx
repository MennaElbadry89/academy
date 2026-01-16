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
        <section className="About my-0 flex flex-col items-center justify-center bg-gray-100 pt-10">
            <h1 className="text-2xl font-semibold text-amber-500 md:text-4xl">About Us</h1>
        <div>
        <div className="flex w-full flex-col items-center gap-2 p-4 md:flex-row">
            
             <div className="overflow:hidden mx-20 h-full w-full p-4 md:h-1/2 md:w-1/2">     
                <img src={img}  className="object-fit h-full w-full" alt="" />
            </div>
            
            <div className="mt-4 flex w-full flex-col md:mt-0 md:w-1/2">
            <p className="mx-0 px-10 text-sm leading-normal text-blue-950 md:text-justify md:indent-10 md:text-lg md:leading-relaxed"> Our web development program is designed to take you from the basics to building fully functional websites and applications.</p>
            <p className="mx-0 px-10 text-sm leading-normal text-blue-950 md:text-justify md:indent-10 md:text-lg md:leading-relaxed">We cover everything from front-end technologies like HTMLCSS, and JAVASCRIPT, to backend development and databases - giving you the completskill set of a full-stack developer. </p>
            <p className="mx-0 px-10 text-sm leading-normal text-blue-950 md:text-justify md:indent-10 md:text-lg md:leading-relaxed">With experienced instructors and a hands-on learning approach, you'll not only learn the theory but also gain practical experience by working on real-world projects.</p>
            <p className="mx-0 px-10 text-sm leading-normal text-blue-950 md:text-justify md:indent-10 md:text-lg md:leading-relaxed"> By the end of the course, you'll have a strong portfolio to showcase your skills and the confidence to pursue a career in web development.</p>
            <div className="align-left md:text-normal mx-2 mt-4 gap-2 pl-10 text-sm">
                 <button onClick={() => navigate("/track")} className="rounded-lg p-1 text-blue-950 hover:bg-amber-500 hover:text-white md:text-lg">Join us</button>
                 <span className="text-sm text-blue-950 md:text-lg"> and start your journey today!</span>
            </div>
           
        </div>                
        </div>       
    </div>
</section>
    )
}