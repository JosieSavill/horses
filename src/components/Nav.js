// import { useNavigate } from "react-router-dom"

export default function Nav ({setScreen}){


    return <header className="header">
         <div className="logo">HORSES{' '}
         <span style={{ fontSize: '1.4rem', fontStyle: 'italic', color: "white"}}>
            In America</span></div>
        <nav>
       
        <ul>
            <li><a onClick={()=>setScreen("Home")}>Home</a></li>

            <li><a onClick={()=>setScreen("About")}>About</a></li>

      

            <li><a onClick={()=>setScreen("Portfolio")}>American Breeds</a></li>

            <li>
            
            <a href="mailto:FiordaSavillJosie@gmail.com">Contact</a>
            </li>

        </ul>
        </nav></header>
}



