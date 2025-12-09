import React from "react";
import './Header.css'
import head from '/images/552.jpg'
import php from '/images/ph.png'
import js from '/images/js.png'
import jquery from '/images/jquery.svg'
import html from '/images/HTML.svg'
import css from '/images/CSS3_logo.svg'
import react from '/images/React.svg'
import node from '/images/Node.png'
import bootstrap from '/images/Bootstrap.svg'
import tailwind from '/images/tailwind.svg'
import npm from '/images/npm.png'
import git from '/images/Git_icon.svg.png'
import github from '/images/github.svg'
import laravel from '/images/Laravel.png'
import mysql from '/images/Database.png'
import fire from '/images/Firebase.png'
import vite from '/images/Vitejs-logo.svg.png'



export default function Home(){


    return(
    <>
        <section className="bg-[url('/images/206.jpg')] h-100 relative bg-cover bg-center px-20 max-md:px-10">
        <div className="absolute inset-0 bg-black/50">
            <h1 className= "typewriter py-25 text-8xl font-bold text-amber-500 max-md:text-3xl" > Learn, Build, Grow</h1>
        </div>

        </section>
            <div className="typeicon flex w-full items-center justify-center gap-2 py-2">
            <img src={html} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={css} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={js} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={jquery} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={bootstrap} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={tailwind} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={react} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={vite} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={npm} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={fire} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={git} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={github} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={php} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={laravel} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={node} className="hover:w-25 h-10 w-10"  alt="" />
            <img src={mysql} className="hover:w-25 h-10 w-10"  alt="" />
            </div>

      </>
    )
}