import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import Content from './components/content';
import Services from './components/services';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
        <Services/>
        <Gallery></Gallery>  
        <Contact></Contact>
        <Footer></Footer>
    </div>
    );
  }
  
  export default App;
