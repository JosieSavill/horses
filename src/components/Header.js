// import { useNavigate } from "react-router-dom"
import React from "react";
// import myVideo  from "../assets/sharemeal.mp4";

export default function Header ({setScreen}){


    return <header className="header">
         <div className="logo">SHAREMEAL{' '}
         <span style={{ fontSize: '1.4rem', fontStyle: 'italic', color: "white"}}>
            recipe wiki</span></div>
        <nav>
       
        <ul>
            <li><a onClick={()=>setScreen("Home")}>Home</a></li>

            <li><a onClick={()=>setScreen("About")}>Signup</a></li>

            <li><a onClick={()=>setScreen("Resume")}>Login</a></li>

            <li><a onClick={()=>setScreen("Portfolio")}>Comment</a></li>

            <li><a onClick={()=>setScreen("Contact")}>Logout</a></li>

        </ul>
        </nav>
                <div className="video-background">
                {/* <video autoPlay loop muted style={{width: "100%"}}>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div> */}
        </header>
}



