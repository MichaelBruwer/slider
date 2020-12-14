import React from 'react';
import FileUpload from './components/FileUpload';
import Carousel from './components/Carousel.js';
import './App.css';

const App = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
     Slider
    </h4>
    {/* <FileUpload /> */}
    <Carousel/>
  </div>
);

export default App;
