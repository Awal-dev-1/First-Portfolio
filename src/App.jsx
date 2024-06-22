import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import MyWork from "./Components/MyWork/MyWork";
import Service from "./Components/Services/Service";
import Navbar from "./Navbar/Navbar";


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}
