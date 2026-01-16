import React from "react";
import './Layout.css'

import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ContactLinks from "../pages/Contact/ContactLinks";


export default function Layout(){


    return(
        <div className="Layout relative flex h-screen w-full flex-col justify-between">
        <Navbar />

        <Outlet/>
        <ContactLinks />

        <Footer/>
        </div>
    )
}