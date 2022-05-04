import React from 'react';
import Navbar from './Components/NavBar/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-js-switch';
import Home from './Components/Pages/Index';
import About from './Components/Pages/About';
import Events from './Components/Pages/Events';
import Team from './Components/Pages/Team';
import Contact from './Components/Pages/Contact';
import Signin from './Components/Pages/Signin';
import img1 from './Images/img1.jpg'
import './App.css';



function App() {
  return (
    <div className='app'>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Events' component={Events} />
      <Route path='/Team' component={Team} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Signin' component={Signin} />

    </Switch>
    </Router>

   
      
       
        <div class="chercher">
            <form> 
              <i class="fa fa-search"/>
              <input type="text" name="text" class="search" placeholder="Chercher un produit"></input>
              <input type="submit" name="submit" class="submit" value="Chercher"></input>
            </form>  
        </div>

        <main>

    
        <div class="p">
        <img src={img1}/>
        
            <h4 class="p1">Notre site est un site de don et de vente en ligne sur toute la Tunisie, 
            il permet de mettre en relation les clients et les vendeurs dans le but de réaliser 
            de très bonnes affaires et pour aider les gents. Chez nous, vous trouver n’importe 
            quel article et bénéficierez toujours les prix les plus bas, parmi nos produits. 
            Nous permettons l'achat, la vente et le don en ligne de manière simple et pratique.
            Nous assurons des transactions sécurisées et fiables. Aussi, nous simplifions le contact entre les donneurs et les associations.
            </h4> 
        </div>  

        






        </main>




      <footer>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-whatsapp"></a>
      </footer>
    </div>
  );
}

export default App;
