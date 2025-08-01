import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Aboutus from './components/Aboutus';
import Ourservices from './components/Ourservices';
import Calltoaction from './components/Calltoaction';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';


function Servicespage() {
  return (
    <>
    <Services />
    <Aboutus />
    <Ourservices />
    <Features />
    <Testimonials />
    <Faq />
    </>
  );
}

export default Servicespage;
