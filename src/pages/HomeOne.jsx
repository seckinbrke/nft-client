import React, { Component } from 'react';

//Components List
import NavBar from "../components/NavBar";
import BannerOne from "../components/banner/BannerOne";
import Subscribe from "../components/Subscribe";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Feadback from "../components/Feadback";
import News from "../components/News";
import Work from "../components/Work";
import Footer from "../components/Footer";
import ScrollUpBtn from "../components/ScrollUpBtn";

class HomeOne extends Component {
    render() {
        return(
            <>
                {/* NavBar: src/components/NavBar */}
                <NavBar />

                {/* NavBar: src/components/banner/BannerOne */}
                <BannerOne />

                {/* Subscribe: src/components/Subscribe */}
                <Subscribe />

                {/* Welcome: src/components/Welcome */}
                <Welcome />

                {/* About: src/components/About */}
                <About />

                {/* Services: src/components/Services */}
                <Services />

                {/* Team: src/components/Team  <Team />*/}
               

                {/* Portfolio: src/components/Portfolio */}
                <Portfolio />

                {/* Features: src/components/Features */}
                <Features />

                {/* Feadback: src/components/Feadback */}
                <Feadback />

                {/* Pricing: src/components/Pricing */}
                <Pricing />

                {/* News: src/components/News */}
                <News />

                {/* Work: src/components/Work */}
                <Work />

                {/* ContactUs: src/components/ContactUs *    <ContactUs />/}
            

                {/* Footer: src/components/Footer */}
                <Footer />
                
                {/* ScrollUpBtn: src/components/ScrollUpBtn */}
                <ScrollUpBtn />
            </>
        );
    }
}
export default HomeOne;


