export default function About() {

    const facebook = "/home/eli_moshe/Development/code/chayo/client/src/assets/facebook logo.jpg"
    const twitter = "twitter"
    const instagram = "instagram"
    const pintrest = "pintrest"

    return (
        <div>
            <h1>About</h1>
                        {/* facebook */}
            <a href="https://www.facebook.com/cmchairstudio">
            <img src={facebook} alt ="facebook-link"/>
            </a>

                         {/* twitter */}
             <a href="">
                <img src={twitter} alt="twitter-link"/>
             </a>

                         {/* instagram */}
             <a href="">
                <img src={instagram} alt="instagram-link"/>
             </a>

                         {/* pintrest */}
             <a href="">
                <img src={pintrest} alt="pintrest-link"/>
             </a>
        </div>

    )
}