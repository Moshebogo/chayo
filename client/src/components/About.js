import { image1, image2, image3, image4} from './images.js' 

export default function About() {

    const facebook = "/home/eli_moshe/Development/code/chayo/client/src/assets/facebook logo.jpg"
    const twitter = "twitter"
    const instagram = "instagram"
    const pintrest = "pintrest"
    const veyron = "./assets/veyron.jpeg"
    const chiron  ="/home/eli_moshe/Development/code/chayo/client/src/assets/chiron.jpeg"

    return ( 
        <div id="">
            <h3>Chaya grew up with her mother styling hair and wigs for her clients from home. It was there that she started playing with her hair, and friends' hair, imitating the Updos she saw in her mother's hairstyle magazines, and recreating hairstyles from her favorite actresses like Mary Kate and Ashley Olsen. In 2009, Chaya started working as a hairstylist. Creating special occasion hairstyles for friends, and eventually, other women who discovered her work on Facebook. After reading Vogue, Harper's Bazaar, Allure, and Glamour Magazines, and reading an article about Celebrity Hairstylists, such as Ken Paves, and Chris Mcmillan, Chaya was inspired to go get her license. After completing 1,000 hours at a top cosmetology program, Aveda Institute New York, and winning a scholarship contest to enroll, Chaya received a New York State License to practice Cosmetology. Though her specialty is styling intricate updos for brides, and creating natural looking styles on wigs, Chaya's greatest strength is forming lasting bonds with everyone she works with. </h3>
                        {/* facebook */}
            <a href="https://www.facebook.com/cmchairstudio">
            <img class="center" src={image1} alt ="facebook-link"/>
            </a>

                         {/* twitter */}
             <a href="">
                <img src={image2} alt="twitter-link"/>
             </a>

                         {/* instagram */}
             <a href="">
                <img src={image3} alt="instagram-link"/>
             </a>

                         {/* pintrest */}
             <a href="">
                <img src={image4} alt="pintrest-link"/>
             </a>
        </div>

    )
}