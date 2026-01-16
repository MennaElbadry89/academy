import React from "react";
import './Contact.css'
import KeenSlider from "./KeenSlider";


export default function Contact(){
    


return(
    <section className="@container bg-gray-200 pt-5">
        <h1 className="ml-10 py-5 text-2xl text-amber-500 md:ml-20">Keep in touch </h1>

        <div className="Contact mx-10 mb-5 flex flex-col items-center justify-center gap-5 md:mx-20 md:flex-row">
           
            <form className="flex w-full flex-col gap-5 rounded-lg border border-amber-200 bg-white p-10 shadow-lg md:w-1/2">
                <input type="text" placeholder="Name" className="rounded-lg border border-amber-200 p-2"/>
                <input type="text" placeholder="E-mail" className="rounded-lg border border-amber-200 p-2"/>
                <input type="text" placeholder="Subject" className="rounded-lg border border-amber-200 p-2"/>
                <textarea name="message" id="message" placeholder="Message" className="rounded-lg border border-amber-200 p-3"></textarea>
                <button className="w-1/2 cursor-pointer rounded-lg border bg-amber-500 p-2 text-white hover:bg-amber-300">Submit</button>
            </form>

            <div className="flex w-full flex-col items-center justify-center border border-amber-200 bg-white p-10 md:w-1/2">
                    <KeenSlider/>
            </div>
        </div>
    </section>
    )
}