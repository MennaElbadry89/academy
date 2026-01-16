import React from "react";
import './Contact.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa6";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";



export default function ContactLinks(){
    
    const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > (window.innerHeight / 2));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return(
        <section className="@container fixed right-10 top-2/3 z-50 flex transform flex-col items-center justify-center bg-gray-200 pt-5">
        <div className="ContactLinks mb-2 flex flex-col items-center justify-center gap-2">
            <a href="https://wa.me/+201060321259" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-green-500 p-2 text-white transition hover:bg-green-600">
                <IoLogoWhatsapp size={24} />
            </a>
            {/* <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700">
                <FaFacebookMessenger size={24} />
            </a> */}
            {/* <a href="tel:+201060321259" className="flex items-center gap-2 rounded-full bg-gray-800 p-2 text-white transition hover:bg-gray-900">
                <FaPhoneSquareAlt size={24} />
            </a> */}
            <a href="https://maps.app.goo.gl/XPeySKn7PTWyn6Xi9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-red-600 p-2 text-white transition hover:bg-red-700">
                <FaLocationDot size={24} />
            </a>
            {/* <a href="/contact" className="flex items-center gap-2 rounded-full bg-purple-600 p-2 text-white transition hover:bg-purple-700">
                <FaWpforms size={24} />
            </a> */}
        </div>
        {showArrow && <div className="mt-10">
            <button className="toparrow">
                <a href="#top" className="flex animate-ping items-center justify-center gap-2 rounded-full bg-gray-500 p-2 text-white transition hover:animate-none hover:bg-gray-600">
                    <FaArrowAltCircleUp size={24} />
                </a>
            </button>
        </div>} 
        {/* {showArrow && (
        <button
          className="toparrow fixed bottom-5 right-5 rounded-full bg-gray-600 p-3 text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FaArrowAltCircleUp size={24} />
        </button>
        )} */}
        
        </section>
    )
}