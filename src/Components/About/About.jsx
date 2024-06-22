import './about.css'
import about_image from "../../assets/about-image.png"

export default function About() {
  return (
    <div className="about-box">
      <h2 className="title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={about_image} alt="" />
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Web development is a dynamic field that requires constant learning
              and adaptation to new technologies. If you are interested in
              learning more about web development, there are many online
              resources and courses available.
            </p>
          </div>

          <div className='about-skills'>
              <div className='skill'>
                 <h3>Html</h3> <hr style={{width:"80%"}}/>
              </div>
              <div className='skill'>
                 <h3>Css</h3> <hr style={{width:"70%"}}/>
              </div>
              <div className='skill'>
                 <h3>JavaScript</h3> <hr style={{width:"65%"}}/>
              </div>
              <div className='skill'>
                 <h3>React JS</h3> <hr style={{width:"40%"}}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
