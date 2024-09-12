/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../Hero/Hero';
import Courses from '../Courses/Courses'; 
import Methodology from '../Methodology/Methodology'; 
import About from '../About/About'; 
import Testimonials from '../Testimonials/Testimonials'; 
import ContactUs from '../ContactUs/ContactUs'; 
import TitleBar from '../Title/TitleBar'; 
import Program from '../Programs/Program'; 
import Campus from '../Campus/Campus'; 
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Announcements from '../Announcements/Announcements';

const Home = () => {
  return (
    <div>
     <Navbar/>
      <Hero />
      <Announcements />
      <TitleBar subTitle="Placement Courses" title="All the skills you need in one place" />
      <Courses />
      <TitleBar subTitle="Our Methodology" title="" />
      <hr />
      <p className='methodo-className'>
        Immersing learners in a real-world collaborative environment, we foster technical and professional growth through project-based learning. This cultivates essential 21st-century skills, ensuring industry readiness.
      </p>
      <Methodology />
      <div className="container">
        <TitleBar subTitle="What we Offer" title="Our Program" />
        <Program />
        <TitleBar subTitle="Skillmate Technologies" title="About Us" />
        <hr />
        <About />
        <hr />
        <TitleBar subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <hr />
        <TitleBar subTitle="Testimonials" title="What Students Say" />
        <Testimonials />
        <TitleBar subTitle="Get in Touch" title="Contact us" />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
