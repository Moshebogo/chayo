import { Link } from "react-router-dom"
  
export default function Header() {

    const image1 = "/home/eli_moshe/Development/code/chayo/client/src/assets/image1.jpg"
    const image2 = "/home/eli_moshe/Development/code/chayo/client/src/assets/image2.png"
    const image3 = "/home/eli_moshe/Development/code/chayo/client/src/assets/image3.jpeg"
    const image4 = "/home/eli_moshe/Development/code/chayo/client/src/assets/image4.png"

    return (
        <div>
            <h1>Header</h1>

          <Link to="/about">
             <img src={image2} alt="hair"/>
          </Link>

          <Link to="/portfolio">
             <img src={image3} alt="hair"/> 
          </Link>
 
          <Link to="/photoshoot">
            <img src={image4} alt="hair"/>
         </Link>  
        </div>
    )
}