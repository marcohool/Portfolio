import "./skills.css"
import { GoBrowser } from 'react-icons/go';
import { LiaServerSolid } from 'react-icons/lia'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export default function Skills() {
   return (
      <section className="skills--section container">
         <div className="skills--container" id="MySkills">
            <p className="section--title">Skills</p>
            <h2 className="skills--section--heading">My Expertise</h2>
         </div>
         <div className="skills--section--container">
            <div className="skills--section--card">
               <div className="skills--section--img">
                  <GoBrowser className="skills--icon" />
               </div>
               <div className="skills--section--card--content">
                  <h3 className="skills--section--title">Front-End</h3>
                  <p className="skills--section--description">Front-end Development is my canvas for crafting engaging and user-friendly digital experiences. My attention to detail ensures pixel-perfect layouts, while my understanding of user experience principles ensures seamless navigation and captivating visuals.</p>

                  <div className="skills--section--skills">
                     <div className="skills--group">
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">HTML</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">JavaScript</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">Bulma</h3>
                           </div>
                        </div>
                     </div>
                     <div className="skills--group">
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">CSS</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">Bootstrap</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">React</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="skills--section--card">
               <div className="skills--section--img">
                  <LiaServerSolid className="skills--icon" />
               </div>
               <div className="skills--section--card--content">
                  <h3 className="skills--section--title">Back-End</h3>
                  <p className="skills--section--description">I create robust server-side applications and APIs that power the functionality of web applications. My knowledge of web frameworks like Django and Ruby on Rails, coupled with database expertise in SQL, enables me to handle complex data operations efficiently.</p>

                  <div className="skills--section--skills">
                     <div className="skills--group">
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">Java</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">RDBMS & SQL</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">Django</h3>
                           </div>
                        </div>
                     </div>
                     <div className="skills--group">
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">Python</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">Git</h3>
                           </div>
                        </div>
                        <div className="skills--data">
                           <AiOutlineCheckCircle />
                           <div>
                              <h3 className="skill--name">Ruby on Rails</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
   )
}