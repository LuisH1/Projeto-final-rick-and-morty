/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import './style.css';
import img_black from './img/bg_welcome.png';

import './responsive.css'

import frame from './img/frame.png';
import { useEffect, useState } from "react/cjs/react.development";
import ModalComponent from '../../components/Modal';









export default function Home() {
    const [showModal, setShowModal] = useState('')
   function setModal(){
       console.log('ok')
       setShowModal(1)
   }
 
    
   

    return (

        <div id='body'>
            <ModalComponent
             visible={showModal}
             setModal={setShowModal}
             view={true}
            >           
            </ModalComponent>
            <div id="containerHome">
                
                <section id='sec-title'>
                <div className="container-topo">
                    <div className="container_text">
                    <img className="img_tabela" src={frame}/>
                    <button className="button_started" onClick={setModal}>Get Started</button>
                    </div>
                    <div className="img_container">
                        <img className="img_black" src={img_black} />
                    </div>
                    </div>
                </section>

                
               
            </div>
        </div>
    )
}