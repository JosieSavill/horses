// import { useNavigate } from "react-router-dom"

export default function Nav ({setScreen}){


    return <header className="header">
         <div className="logo">HORSES{' '}
         <span style={{ fontSize: '1.4rem', fontStyle: 'italic', color: "white"}}>
            In America</span></div>
        <nav>
       
        <ul>
            {/* <li className="homelink"><a onClick={()=>setScreen("Home")}>Home</a></li> */}

            <li className="aboutlink"><a onClick={()=>setScreen("About")}>Home</a></li>

      

            <li className="breedslink"><a onClick={()=>setScreen("Portfolio")}>Breeds</a></li>

            <li className="contactlink">
            
            <a href="mailto:FiordaSavillJosie@gmail.com">Contact</a>
            </li>

        </ul>
        </nav></header>
}



