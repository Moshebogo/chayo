import '/home/eli_moshe/Development/code/chayo/client/src/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import PhotoShoot from './PhotoShoot';

function App() {
  
  return (
    <div>
       
       <BrowserRouter>
         <Routes>
          <Route path="/" element={ <Header />}/>
          <Route path="/about" element={ <About />} />
          <Route path="/portfolio" element={ <Portfolio />} />
          <Route path="/photoshoot" element={ <PhotoShoot />}/>
         </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App;
