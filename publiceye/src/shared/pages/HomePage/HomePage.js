import React from "react";
import HeroSection from "../../hero section/hero";
import MainNavigation from "../MainNavigation/MainNavigation";
import Why from "../why/why";


import './HomePage.css'; 

const HomePage = () => {
    return(
        <div className="home-page">
            <MainNavigation/>
            <HeroSection/>
            <Why/>
        </div>
    )
}

export default HomePage