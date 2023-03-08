import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Aboutmain from "./components/Aboutmain";
import Services from "./components/Services";
import Process from "./components/Process";
import Profile from "./components/Profile";
import Team from "./components/Team";


function App() {
  return (
    <div className="App noSelect">
      {/* npx tailwindcss -i ./src/index.css -o ./public/style.css --watch */}
     
      
      <Routes>
        <Route path="/About" element={<Aboutmain/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/About/Process" element={<Process/>}/>
        <Route path="/About/Profile" element={<Profile/>}/>
        <Route path="/About/Team" element={<Team/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      <Navbar/>

    </div>
  );
}

export default App;
