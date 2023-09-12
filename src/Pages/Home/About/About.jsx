import "./about.css"

export default function About() {
   return (
      <section className="about--section">
         <div id="About" className="about--section--img">
            <img src="./img/hero_image4.jpg" alt="About me" />
         </div>
         <div className="hero--section--content--box about--section--box">
            <p className="section--title">About Me</p>
            <div className="hero--section--content">
               <h1 className="hero--title">
                  Driven & dedicated tech enthusiast based in Surrey, UK📍
               </h1>
               <p className="hero--section--description">I'm Marco Boutchelski, a Computer Science graduate who embarked on a seven-year journey into the world of technology, beginning at the age of 14 and culminating in the achievement of First-Class Honors for my Bachelor's degree in Computer Science from the University of Surrey.
               </p>
               <p className="hero--section--description">I've had the privilege of gaining practical experience during my time as a summer intern working with the Defence Data Research Centre, where I delved into the world of data resilience, exploring strategies to ensure organisations can maintain uninterrupted operations, even in the face of data-related challenges.
               </p>
               <p className="hero--section--description">Outside the field of technology, I find balance and inspiration through my passion for fitness. Over the years, I've consistently trained in the gym, discovering the discipline of calisthenics and embracing the endurance of long-distance running. These pursuits have taught me invaluable lessons about perseverance, goal-setting, and the importance of a healthy work-life balance. My personal journey in fitness also led me to pursue a level 3 personal training qualification, allowing me to help others achieve their health and fitness goals.</p>
            </div>
         </div>
      </section>
   )
}