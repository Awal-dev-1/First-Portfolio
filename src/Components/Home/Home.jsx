import './home.css'
import home_banner from "../../assets/home-pic.png"

export default function Home() {
  
  return (
    <div className="home-box">
      <div className="home-content">
        <h3>
          The Name is <span>Mohammed</span>
        </h3>
        <p>
         A front-end developer who focuses on the visual elements and user experience
          of a website. They write code using HTML, CSS, and JavaScript to make
          sure the website looks good and functions smoothly on different
          devices.
        </p>
        <div className='home-btn'>
            <button>Read More</button>
            <button>Connect With Me</button>
        </div>
      </div>
      <div className="home-image">
        <img src={home_banner} alt='image'/>
      </div>
    </div>
  );
}
