import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Book from "../components/Book"



export default function Home() {
  return (
    <div className="">
      <Navbar/>
  
      {/* <Landing/> */}
      {/* <Book/> */}
      <Welcome/>
      <Footer/>
      {/* <TicketCard/> */}
    </div>
  )
}


