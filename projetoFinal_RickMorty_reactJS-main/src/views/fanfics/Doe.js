import React,{useState, useEffect} from 'react';
import api from '../../services/apiForum'
import MenuFanfics from './Menu'
import './styles/style.css'
import './styles/responsive.css'




function DoeFanfics(){


    return(

        <>
       <div className="container-forum">

    

<section className="section">


<MenuFanfics></MenuFanfics>
  
</section>
</div>
        </>

    )
}


export default DoeFanfics