import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      {/* npx tailwindcss -i ./src/index.css -o ./public/style.css --watch */}
     
      <Home/>
      <Footer/>
      <Navbar/>

    </div>
  );
}

export default App;
