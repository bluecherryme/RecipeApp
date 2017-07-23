import React, {Component} from 'react';
import Navbar from './Navbar';
import './Home.css'


export default class Home extends Component{
    render(){
        return(
            <div className="home">
             <div className="overlay">
                <Navbar/>
                <div className="heading">
                    <h4>Let's</h4>
                    <h1>COOK</h1>
                    <p>The best recipes from all over the world</p>
                </div>
             </div>
            </div>
        );
    }
}