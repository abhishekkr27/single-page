import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import About from './components/About';
import Section from './components/Section';
import Stand from './components/Stand';
import Footer from './components/Footer';
import { css } from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {

  const [loading,setLoading] = useState(false);
  const override = css`
  display: block;
  border-color: red;
  margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])


  return (
    <div className="App">

      {
        loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40} />
          :
          <>
            <Navbar />
            <Header />
            <Products />
            <About />
            <Section />
            <Stand />
            <Footer />
          </>
      }

    </div>
  );
}

export default App;
