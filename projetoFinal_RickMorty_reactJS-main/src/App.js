import React,{useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';
import history from './services/history';
import Header from './components/header/HeaderComponent'
import Footer from './components/footer';
import styled from 'styled-components';






function App() {
  return (
    <>
      <BrowserRouter history={history}>
      <Header> </Header>
     
      <Routes>

      </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App; 
