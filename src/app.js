import React, { Component,Fragment } from 'react';
import MovieResults from './components/MovieResults';
import FavoriteMovieList from './components/FavoriteMovieList';
import Navbar from './components/Navbar';
import About from './components/about/About';
import Contact from './components/Contact';
import './app.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <div className="container">
               
              
                <div className="row">
                    <Router>
                        <Fragment>    
                            <Navbar />  
                            <br/>  
                         <section className="container">   
                        <Switch>
                           
                            <Route exact path="/" component ={MovieResults}/>
                            <Route exact path="/fav" component={FavoriteMovieList}/>
                            <Route exact path="/about" component ={About}/>
                            <Route exact path="/contact" component ={Contact}/>
                        </Switch>
                        </section>
                        </Fragment>    
                    </Router>    
                    
                </div>
            </div>
        );
    }
}

export default App;