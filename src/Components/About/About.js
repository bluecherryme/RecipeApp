import React, {Component} from 'react';
import Nav from './../../Components/Home/Navbar';
import Footer from './../Footer/footer';
import './About.css';

export default class About extends Component{
    render(){
        return(
            <div className="About">
            <Nav/>
                <h1>About</h1>
                <h2>Technologies used to build this page:</h2>
                <div className="icons">
                    <img src={require('./../../img/html5-icon-1.png')} alt='html5'/>
                    <img src={require('./../../img/css3.png')} alt='css3'/>
                    <img src={require('./../../img/js.png')} alt='Javascript'/>
                    <img src={require('./../../img/es6.png')} alt='es6'/>
                    <img src={require('./../../img/React.png')} alt='React'/>
                    <img src={require('./../../img/Redux.png')} alt='Redux'/>
                    <img src={require('./../../img/node.png')} alt='Node'/>
                    <img src={require('./../../img/express.svg')} alt='Express'/>
                    <img src={require('./../../img/Postgres.png')} alt='Postgres'/>
                    <img src={require('./../../img/git.png')} alt='Git'/>
                    <img src={require('./../../img/github.png')} alt='Github'/>
                </div>
                <h2 className='here-h2'>Have a look at the <span>CODE</span>  that runs this page <br/>
                    <a className='here'
                     href='https://github.com/bluecherryme/RecipeApp'>HERE</a>
                </h2>
                <Footer/>
            </div>
        );
    }
}