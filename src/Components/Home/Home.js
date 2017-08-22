import React, {Component} from 'react';
import Navbar from './Navbar';
import './Home.css'


export default class Home extends Component{
    
    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <div className="home" id="home">
             <div className="overlay">
                <Navbar/>
                <div className="heading">
                    <div className="heading2">
                        <h4>Let's</h4>
                        <h1 className="cookH1">COOK</h1>
                        <p>The best recipes from all over the world</p>
                    </div>
                </div>
                    <a href='#search'>
                        <img className='arrow-down' src={require('./../../img/arrow_down.svg')} alt='arrow-down'/>
                    </a>
                </div>
            </div>
        );
    }
}