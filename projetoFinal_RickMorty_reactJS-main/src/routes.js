import React, {useState, useEffect}from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import Personagens from "./views/characters";
import Sobre from "./views/about";

import Location from "./views/location";
import Home from "./views/home";
import PageNotFound from './views/notfound/index'
import Create from './views/fanfics/Create'
import GetAllPosts from './views/fanfics/GetPosts'
import DoeFanfics from './views/fanfics/Doe'
import Quemsomos from './views/team/index'






 function Routes(){
            const [apelido, setApelido] = useState('')
            useEffect(() => {
                  setApelido(localStorage.getItem('apelido'))
            },[localStorage])
            console.log(apelido)
            return(
                         <Switch>

                              <Route path="/" exact component={Home} />
                              <Route path="/home" exact component={Home} />

                             
                              <Route path="/fanfics/posts" exact component={GetAllPosts} />

                           

                               <Route path="/fanfics/create"  exact component={Create} />
                               <Route path="/fanfics/doe"  exact component={DoeFanfics} />
                              
                               <Route path="/quem-somos"  exact component={Quemsomos} />

                              <Route path="/character"  exact component={Personagens} />
                              <Route path="/location" exact component={Location} />

                              <Route path="/about" exact component={Sobre} />
                            



                              <Route path="*"  component={PageNotFound} />
                            
                        </Switch>
            )

}

export default Routes
