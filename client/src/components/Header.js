import { Link } from "react-router-dom"
import { image1, image2, image3, image4} from './images.js' 

  
export default function Header() {

    return (
        <>
            {/* <h1>Header</h1> */}
        <div id="headerImages">

                 <div class="container">
                    <Link to="/about">
                        <img class="image" src={image2} alt="hair"/>
                        <div class="center">About</div>
                    </Link>
                 </div>

                 <div class="container">
                    <Link to="/portfolio">
                        <img class="image" src={image3} alt="hair"/> 
                        <div class="center">View Portfolio</div>
                    </Link>
                 </div>

                 <div class="container">           
                    <Link to="/photoshoot">
                        <img class="image" src={image4} alt="hair"/>
                        <div class="center">Phooshoots</div>
                    </Link>  
                    </div>   

                 <div class="container">     
                    <img class="image" src={image1} alt="hai"/>
                    <div class="center">Stuff</div>
                 </div>

        </div>
        </>
    )
}