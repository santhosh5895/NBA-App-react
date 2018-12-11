import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './header';
import Footer from './footer';
import Home from './home';

export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={Home}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}