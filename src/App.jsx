import React from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { useState, useEffect } from "react"
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import Products from "./components/Products/product";
import TopProducts from "./components/TopProducts/TopProducts";
import Subscribe from "./components/Subscribe/subscibe";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/popup";
import Testimonials from "./components/Testimonial/Testimonial";


function App() {

  const [OrderPopup, SetOrderPopup]= useState(false)

    const handleOrderPopup = ()=>{
      SetOrderPopup(!OrderPopup);
    };
    useEffect(()=>{
      Aos.init({
         offset: 100,
         duration: 800,
         easing: "ease-in-sine",
         delay: 100,
      })
      Aos.refresh();
    } , []);


  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Products/>
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner/>
        <Subscribe />
        <Testimonials/>
        <Footer/>¯
        <Popup orderPopup={OrderPopup} setOrderPopup={SetOrderPopup} />
      </div>
    </>
  )
}

export default App
