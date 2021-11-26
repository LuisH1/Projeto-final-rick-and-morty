import React, { useEffect, useState } from "react";
import CarouselComponent from '../../components/Carousel';
import ModalComponent from '../../components/Modal';
import api from "../../services/api";
import './style.css';
import LoadingComponent from "../../components/Loading";






    export default function Personagens() {



    const [character, setCharacter] = useState([])
    const [id, setId] = useState('')
    const [showModal, setShowModal] = useState('')
    const [loading, setLoading] = useState(false)
    const [persona, setPersona] = useState([])


    async function getApi() {

        let res = await api.get('/character/');
        setLoading(false)
        
        let json = res.data.results

        setCharacter(json)
        
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            getApi()
        },1000)
       
    }, [])

    function handleImageId(imgID) {
        setId(imgID)
    }

    useEffect(() => {
        setShowModal(id)
    }, [id])

    function get(per){
        per.map((i,idx)=>{
            if(id == i.id){
                setPersona([i])
            }
        })
    }
    
    useEffect(()=>{
        get(character)
    }, [id])
    


    return (
        <>
        <div className="containerCharacter">

        <div className="container-welcome">
                
                
            </div>
        {loading &&
        
            <LoadingComponent></LoadingComponent>


        }
       

                <CarouselComponent imagens={character}   qtItems={5}  getId={handleImageId} />
            <ModalComponent
             visible={showModal}
             setModal={setShowModal}
             Persona={persona}
            >           
            </ModalComponent>
            </div>
        </>
    )
}