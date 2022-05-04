import React from 'react'
import Navbar from '../NavBar/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-js-switch';
import Home from './Index';
import Events from './Events';
import Team from './Team';
import NvCompte from './NvCompte';
import Signin from './Signin';
import Contact from './Contact';
import './About.css';
import about from'../../Images/about.jpg'

function About() {
  return (
    <div>
            <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact  component={Home} />
                <Route path='/About' exact   component={About} />
                <Route path='/Events'  component={Events} />
                <Route path='/Team'    component={Team} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Signin'  component={Signin} />
                <Route path='/NvCompte' component={ NvCompte} />
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

              <div class="about-section">
                <img src={about}/>
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
              </div>
            </main>






            <footer>
              
              <a href="" class="fa fa-facebook"></a>
              <a href="" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-instagram"></a>
              <a href="#" class="fa fa-whatsapp"></a>

            </footer>

      
    </div>
  )
}

export default About
