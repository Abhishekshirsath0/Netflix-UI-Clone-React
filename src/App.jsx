import { useState } from "react";
import "./App.css";
import Ask_que from "./component/Ask_que";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import More_reasons from "./component/More_reasons";
import Trending_CARD from "./component/Trending-CARD";
import { Outlet, Route, Routes } from "react-router-dom";




function App() {

  
  
  return ( 
    
         
    
      
     <main>
      <Header />
      
      <Banner />
      <Trending_CARD />
      <More_reasons />
      <Ask_que />
      <Footer />
     
      </main>
      

      
    
    
  );
}

export default App;
