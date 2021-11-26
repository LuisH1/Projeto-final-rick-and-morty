import React,{useState, useEffect} from 'react'
import api from '../../services/apiForum'
import {Link} from "react-router-dom";
import './styles/responsive.css'
import './styles/style.css'

function MenuFanfics(){

    return(
        <>

        <nav className="nav-forum">
      
            <li>
                <Link className="link" to="/fanfics/create">Criar</Link>
            </li>

            <li>
            <Link className="link" to="/fanfics/posts">Ler Fanfics</Link>
            </li>

            <li>
            <Link  className="link" to="/fanfics/doe">Forum</Link>
            </li>
        </nav>
        </>
    )


}


export default MenuFanfics