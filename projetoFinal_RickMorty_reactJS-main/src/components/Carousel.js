/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

import LoadingBar from './LoadingBar'





/**Component carroussel recebe o array capturado na requisição a API pela props e retorn o carroussel importando do modulo elastic para a pagina que chamou */


function CarouselComponent(props){

    /*pega click da imagem, e retorn o id da imagem para o component pai*/
    const [idFanfiction, setIdFanfiction] = useState('')
    const [handleId, setHandleId] = useState('')
    const [vw, setVw] = useState(window.innerWidth)
    const [card, setCard] = useState(4)
    const [inicia, setIncial] = useState('')
    //pega click e envia id da foto clickada para o arquivo que enviou a funcao na props // personagens
    useEffect(()=>{
        if(props.getId){
            (props.getId(handleId))
        }
    },[handleId])

     //pega click e envia id da foto clickada para o arquivo que enviou a funcao na props // fanfiction

  useEffect(() => {
    
    if(props.handleIdFun){
        props.handleIdFun(idFanfiction)
      
    }


  },[idFanfiction])


     //condicionais de exibicao por tamanho da tla
    useEffect(()=>{
         if(vw <= 360){
            setCard(1)
        }
        else if(vw <= 510){
            setCard(2)
        }else if(vw <= 720){
            setCard(3)
        
        }
    
    },[window])
    //tentando fazer condicionais de exibicao por tamanho da tela
    
    return(
        
      
        <>
        <Carousel
         itemsToShow={card}
         showArrows={false}
         pagination={props.viewWidth == 1? false : true}
         verticalMode={props.vertical}
         >
            


          {props.imagens.map((item, index)=>(   


            
         
          
                <div>   
              
                     {item.title &&    
                  <>
                 <div className='card-fanfics' onClick={e => setIdFanfiction(item._id)} ><p className="cards-titles" >{item.title}</p></div>
             
                        </>
                  } 



                {props.text &&    
                
                <div className='card'>{item.name}<br/><LoadingBar time={.5}/>{item.type}<br/><LoadingBar/>{item.dimension}<br/><LoadingBar/></div>
                }   

               {item.image &&
              <img  className='imgCarousel' key={index} src={item.image}  onClick={(e)=>setHandleId(index +1)}/>
               }

           
            </div>

        
          ))}
          
        </Carousel>
        </>
    )
}


export default CarouselComponent



