import React from "react";
import "./style.css"
import {Link} from 'react-router-dom'

export default function Footer(){
    return(
    <footer className="footer-master">
            <p className="tag-p">© Desenvolved by group of final project "Rick and Morty" Web App. <Link to="/quem-somos">Desenvolvedores</Link> </p>
        </footer>
    )
}
