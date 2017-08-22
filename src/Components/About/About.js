import React, {Component} from 'react';
import Nav from './../../Components/Home/Navbar';
import Footer from './../Footer/footer';
import './About.css';

export default class About extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <div className="About">
            <Nav/>
                <h1 id="about">About</h1>
                <div className="info">
                    <p>This page was built as a personal project for DevMountain Bootcamp in July/August 2017.
                     </p>
                </div>
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
                <h2 className='here-h2'>Have a look at the <a className='here'
                href='https://github.com/bluecherryme/RecipeApp'>CODE</a>  that runs this page. <br/>
                    
                </h2>
                <Footer/>
            </div>
        );
    }
}