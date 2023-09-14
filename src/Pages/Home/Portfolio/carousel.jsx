import React, { useState, useEffect } from 'react';
import data from "../../../data/index.json"
import "./portfolio.css"
import { Carousel } from '@trendyol-js/react-carousel';


const CardCarousel = () => {
   return (
      <Carousel show={3} slide={1} swiping={true} className='carousel'>
         {data?.portfolio?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
               <div className="portfolio--section--img">
                  <img src={item.src} alt="Placeholder" />
               </div>
               <div className="portfolio--section--skills">
                  {item.skills.map((skill, skillIndex) => (
                     <div className="portfolio--skill" key={skillIndex}>{skill}</div>
                  ))}
               </div>
               <div className="portfolio--section--card--content">
                  <div>
                     <h3 className="portfolio--section--title">
                        {item.title}
                     </h3>
                     <p className="text-md">{item.description}</p>
                  </div>
                  <p className="text-sm portfolio--link">
                     {item.link}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="none"
                     >
                        <path
                           d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                           stroke="currentColor"
                           stroke-width="2.66667"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                  </p>
               </div>
            </div>
         ))}
      </Carousel >
   );
};

export default CardCarousel;