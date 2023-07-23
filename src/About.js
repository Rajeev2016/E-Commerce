import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/productcontex";


const About = () => {
  const { myName } = useContext(AppContext)
  const data = {
    name: "Sharma Electronics",
  };
 
  return(
  <>
  { myName }
  <h1>about</h1>
  <HeroSection myData={data} />;
  </>
  )
};

export default About;