"use client"

//import React from 'react';
// import { render } from 'react-dom';
// import WaterWave from 'react-water-wave';
//import image from './path-to/demo.jpg';

import WaterWaveComponent from "@/components/WaterWaveComponent";


export default function Container({children, w_class}){
    return (
   
    <div className={`${w_class || "max-w-screen-md"} mx-auto`}>
        {children}
        </div>
      
  

    
    )
}

// render(<App />, document.querySelector('#root'));
