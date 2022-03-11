import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Book from "../components/Book"



export default function Home() {
  return (
    <div className="bg-grad">
      <Navbar/>
      <hr className="w-[80vw] justify-center mx-36"/>
      <Landing/>
      <Book/>
      {/* <Welcome/> */}
      <Footer/>
      {/* <TicketCard/> */}
    </div>
  )
}


