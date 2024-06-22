import './footer.css'
import {FaUser} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-container">
        <div className="footer-right">
          <h2 className="logo">Mohammed</h2>
          <p>
            A front-end developer who focuses on the visual elements and user
            experience of a website. They write code using HTML, CSS, and
            JavaScript to make sure the website looks good and functions
            smoothly on different devices.
          </p>
        </div>
        <div className="footer-left">
            <div className='left-icon'>
                <FaUser size={20}/>
                <input type='email' placeholder='Enter your email'/>
            </div>
            <div className='footer-sub'>
                <button>Subscribe</button>
            </div>
        </div>
      </div>
      <hr/>
      <div className='last-footer'>
        <p>&copy; 2024 Mohammed Awal. All right reserved.</p>
        <ul>
            <li>Term of services</li>
            <li>Privacy policy</li>
            <li>connect with me</li>
        </ul>
      </div>
    </div>
  );
}
