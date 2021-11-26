/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Link} from 'react-router-dom'
import './header.css'
import Btn from "./btn/Btn";
import Logo from './img/logo_rick.svg';
import Icon from './img/icon-menu.svg';
import LoadingBar from "../LoadingBar";






export default function Header() {

    function toggleMenu (){
        const nav = document.querySelector('#nav')
        nav.classList.toggle('active')  
    }

    return(
        <div id='div-header'>
            <header id='header'>
                <img id='logo' src={Logo}></img>
                <nav id='nav'>

                    <button 
                    id='btn-menu' 
                    onClick= {toggleMenu}
                    ><img id='icon-menu' src={Icon}></img></button>

                    <ul id='menu'>
                        <li>
                        <Link className="link" to="/"><Btn text='Home'/></Link>
                        </li>
                        <li>
                        <Link className="link" to="/character"><Btn text='Personagens'/></Link>

                        </li>
                             <li>
                        <Link className="link" to="/location"><Btn text='Planetas'/></Link>
                        </li>
                        <li>
                        <Link className="link" to="/about"><Btn text='Sobre a Série'/></Link>
                        </li>
                        <li>
                        <Link className="link" to="/fanfics/posts"><Btn text='Fanfiction'/></Link>
                        </li>
                    </ul>  
                </nav>
            </header>
            <LoadingBar time={1}></LoadingBar>
        </div>
    )
}