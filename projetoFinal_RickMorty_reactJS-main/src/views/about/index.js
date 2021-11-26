/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./style.css"
import api from '../../services/api'
import LoadingComponent from '../../components/Loading';

function Sobre(){

    const [imagem, setImagem] = useState([])
    const [loading, setLoading] = useState(false)
     
       async function getImg(){
       let response = await api.get('/character/')
       setLoading(false)
       let json = response.data.results
       setImagem(json)
    
    }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            getImg()
        },1000)
    },[])


    return(


       <><main id="pai">
            {loading &&
        
        <LoadingComponent><h1 className="loading"></h1></LoadingComponent>


             }
       
            <section id="pai2">
                <div id="text1">
                    <p className="text-about">Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por <a id='links' href="https://pt.wikipedia.org/wiki/Justin_Roiland" target="_blank">Justin Roiland</a> e <a id='links' href="https://pt.wikipedia.org/wiki/Adult_Swim" target="_blank">Dan Harmon</a> para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.</p>
                </div>
                    <img id='img1' src="https://azeheb.com.br/blog/wp-content/uploads/2017/10/rick-and-morty-e-a-ciencias.jpg" alt=""></img>
            </section>

            <section id="pai3">
                    <img id='img2' src="https://i1.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/07/17091456/rick-and-morty-4-temp1.jpg?fit=3000%2C1688&ssl=1"></img>
                <div id="text2">
                    <p className="text-about">
                    Veja os principais personagens que fazem parte das aventuras malucas de Rick e Morty
                    </p>
                    <li id='to-galery'>
                    <Link className="linkGaleria" to="/about/gallery">Ir para a Galeria</Link>
                    </li>
                </div>
            </section>
           

         
        </main>
       </>
    )
}
export default Sobre;
