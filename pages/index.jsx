import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";


export default function Home() {
  return (
    <div className="bg-grad">
      <Navbar/>
      <hr className="w-[80vw] justify-center mx-36"/>
      <Welcome/>
      <Footer/>
    </div>
  )
}

