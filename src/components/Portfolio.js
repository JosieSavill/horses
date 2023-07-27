import Nav from "./Nav";
import Footer from "./Footer";
import img1 from "../assets/morganhorse.jpg";
// import img2 from "../assets/Horiseon.jpg";
import img3 from "../assets/tennesseewalker.jpg";
import img4 from "../assets/thoroughbred.jpg";
import img5  from "../assets/quarterhorse.jpg";
import img6 from "../assets/Am_Paint_Horse.jpg";
import img7 from "../assets/appaloosa.jpg";

// import profile from "../assets/profile.jpg";

export default function Portfolio ({setScreen}){

    return <>
        <Nav setScreen={setScreen}/><main className="content">

            <div className="container">
                <br></br>
                <br></br>

                {/* <a href="https://1drv.ms/w/s!AhfCqpI38Ls5l27GKxFTiBmh7zpv?e=pIg1kG" className="downloadresume"><h2 className="downloadresume" style={{ fontSize: '20px'}} >Download My Resume</h2></a> <br/>
                <br></br> */}

                <h2 style={{ fontSize: '20px'}}>Click image to learn more:</h2>
                {/* <br></br> */}

                
                {/* <a href="mailto:FiordaSavillJosie@gmail.com">FiordaSavillJosie@gmail.com</a> */}

                <br></br>
                
        
        
    
     <section id="work" className="portfolio">

        <div id="horeison" className="work-horeison">
            <a href="https://en.wikipedia.org/wiki/American_Paint_Horse">
                <div>
                <h3>American Paint Horse</h3>
                </div>
                <div>
                    
                <div className="bgBox" style={{backgroundImage: `url(${img6})`}}></div>
                   
                </div>
            </a>
            {/* <a href="https://github.com/JosieSavill/horses" style={{ fontSize: "20px" }}>View Repository</a>  */}
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://en.m.wikipedia.org/wiki/Appaloosa">
                <div>
                    <h3>Appaloosa</h3>
                    <br></br>
                </div>
                <div>
                    
                    <div className="bgBox" style={{backgroundImage: `url(${img7})`}}></div>
                </div>
            </a>
            {/* <a href="https://github.com/LL8719/ShareMeal" style={{ fontSize: "20px" }}>View Repository</a> */}
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://en.m.wikipedia.org/wiki/American_Quarter_Horse">
                <div>
                    <h3>American Quarter Horse</h3>
                </div>
                <div>
                    
                    <div className="bgBox" style={{backgroundImage: `url(${img5})`}}></div>
                </div>
            </a>
            {/* <a href="https://github.com/JosieSavill/space-weather-blog" style={{ fontSize: "20px" }}>View Repository</a> */}
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://en.m.wikipedia.org/wiki/Morgan_horse">
                <div>
                    <h3>Morgan Horse</h3>
                    <br></br>
                </div>
                <div>
                    
                    <div className="bgBox" style={{backgroundImage: `url(${img1})`}}></div>
                </div>
            </a>
            {/* <a href="https://github.com/JosieSavill/beagzcal" style={{ fontSize: "20px" }}>View Repository</a> */}
        </div>

        <div id="horeison" className="work-horeison">
            <a href="https://en.m.wikipedia.org/wiki/Thoroughbred">
                <div>
                    <h3>American Thoroughbred</h3>
                </div>
                <div>
                    {/* <h3>American Thoroughbred</h3> */}
                    <div className="bgBox" style={{backgroundImage: `url(${img4})`}}></div>
                </div>
            </a>
            {/* <a href="https://github.com/JosieSavill/gem" style={{ fontSize: "20px" }}>View Repository</a> */}
        </div>


        <div id="horeison" className="work-horeison">
            <a href="https://en.m.wikipedia.org/wiki/Tennessee_Walking_Horse">
                <div>
                    <h3>Tennessee Walking Horse</h3>
                </div>
                <div>
                    <div className="bgBox" style={{backgroundImage: `url(${img3})`}}></div>
                </div>
            </a>
            {/* <a href="https://github.com/JosieSavill/campeones" style={{ fontSize: "20px" }}>View Repository</a> */}
        </div>


       

        
        




        

        

       

      
    </section> 

    </div>
    
    
</main>
<br></br>
<br></br>
<Footer />
</>
}
