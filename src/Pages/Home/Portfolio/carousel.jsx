import React, { useState, useEffect } from 'react';
import data from "../../../data/index.json"
import "./portfolio.css"
import { Carousel } from '@trendyol-js/react-carousel';
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const CardCarousel = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      // Update the windowWidth state when the window is resized
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   let showValue = 3;
   if (windowWidth <= 768) {
      showValue = 1;
   } else if (windowWidth <= 1100) {
      showValue = 2;
   }

   return (
      <Carousel show={showValue} slide={1} swiping={true} useArrowKeys={true} className='carousel'>
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
                  <a className="text-sm portfolio--link" target='_blank' href={item.link}>
                     View in Github
                     <HiOutlineArrowSmRight className="link--button" />
                  </a>
               </div>
            </div>
         ))}
      </Carousel >
   );
};

export default CardCarousel;