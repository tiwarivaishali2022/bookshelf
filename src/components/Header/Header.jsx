import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const header = () => {
  return (
    <div className='holder'>
      
      <header className='header'>
          <Navbar />
          <div className='header-content flex flex-c text-center text-white'>
            <h2 className="header-title text-capitalize"> Find Your Book Of Choice.</h2><br />
            <p className="header-text fs-18 fw-3">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Provident quisquam officia ab eius vero ad, dignissimos,
                sequi laborum hic, repellat tempore asperiores autem. In, quasi! Cum porro
                optio repellat delectus?
            </p>
            <SearchForm />
          </div>
      </header>
        
    </div>
  )
}

export default header