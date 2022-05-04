import React from 'react'
import Navbar from '../NavBar/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-js-switch';
import Home from './Index';
import About from './About';
import Events from './Events';
import Team from './Team';
import NvCompte from './NvCompte';
import Signin from './Signin';
import './Contact.css'


function Contact() {
    return (
        <div>

            <Router>
            <Navbar />
            <Switch>
            <Route path='/' exact  component={Home} />
                <Route path='/About'   component={About} />
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

        <div class="contact">
            <h3>Contacter nous :</h3>
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="votre nom.."/>

            <label for="lname">Adresse mail</label>
            <input type="text" id="email" name="email" placeholder="Votre adresse mail.."/>

            

            <label for="messages">Messaage</label>
            <textarea id="messages" name="message" placeholder="Laisser votre message.." />
            <input type="submit" id="msg" value="Envoyer"/>
        </div>
                  
            

        </main>



        <footer>

          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-whatsapp"></a>

        </footer>














        </div>
    )
}

export default Contact
