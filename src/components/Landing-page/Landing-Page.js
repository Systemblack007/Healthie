import React from 'react';
import './Landing-Page.css'
import Navbar from '../navbar/navbar';
import Button from '../Button/Button'
import About from '../homePage/About/About';
import Services from '../homePage/Services/Services';
import Footer from '../homePage/Footer/Footer';
import {Switch,Route, BrowserRouter, Link} from "react-router-dom";

function LandingPage(props) {
    
    
    return <div className="LandingPage-parent ">

            <Navbar/>

    <div className="parent-text-btn">

        <h1 className="h1-tag">
            We are comitted to your health
        </h1>

        <p className="p-tag">
            Since the first day of operation Healthie, our team has been
            focused on building a high-quality healthcare services
        </p>
        
        <div>
            <Button bg={'#4290C9'} buttonName={`Book Appointment`} width={`290px`} height={`59px`} marginTop={`500px`} marginLeft={`40px`} /> 
        </div>

    </div>

        <img className="doctors-img" src="./img.png" width='550px' height='650px' />           

        <About/>

        <Services/>

        <Footer/>

    </div>

;}



  export default LandingPage;