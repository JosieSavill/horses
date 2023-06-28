import Nav from "./Nav";
import stories from "../assets/horsestories.png";
import myVideo  from "../assets/awakening.mp4";
import Footer from "./Footer";
import archiveLogo from "../assets/transparentarchivelogo.png";


export default function About ({setScreen}){
    return <div>
        <Nav setScreen={setScreen}/>
        <div className="video-background">
                <video autoPlay loop muted style={{width: "100%"}}>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        <aside className="aside-contact">
            
            <section className="aside-contact-links">
                <img src={stories} className="profile-pic" alt="book cover img"/>
            </section>
            
            <section id="about" className="aside-about">
                 <div>
                 
                    <p>
                        <strong>Welcome!!</strong>
                    </p>


                    <br></br>

                    <p>    
                        Horses are the stuff of legends, 

                    </p>

                    <p>    
                         ... click below to access The Greatest Horse Stories Ever Told: 

                    </p>
                    
                    <button className="portallink">
                        <a href="https://archive.org/details/greatesthorsesto0000unse/mode/2up?view=theater" className="downloadresume"><img src={archiveLogo} style={{width: "20px", height: "20px"}} alt="logo img"/> Internet Archive</a>
                    </button>

                    
                    
                    
                    
                    
                </div>

                {/* <div>
                    
                    <h5>LinkedIn  <a href="https://www.linkedin.com/in/josiefiordasavill" className="linkedinlogo" >
                    <img src={linkLogo} style={{width: "20px", height: "17px"}} alt="linkedin logo img"/></a></h5> 
                    <br></br>
                    <h5>GitHub  <a href="https://github.com/JosieSavill?tab=repositories" className="githublogo">
                    <img src={githubLogo}  style={{width: "20px", height: "17px"}} alt="github logo img"/></a></h5>
                    <br></br>
                    <h5>StackExchange<a href="https://stackexchange.com/users/27657333/josie-fiorda-savill" className="stacklogo">
                    <img src={stackLogo} style={{width:"88px", height: "20px"}} alt="stackexchange logo img"/>
                    </a></h5>
                </div> */}
                
            </section>

            

        </aside>
        {/* <br></br>
        <br></br> */}
        {/* <br></br> */}
        <Footer />
        {/* <Footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'vertical', margin: '0' }}/> */}
    </div>
        
}

