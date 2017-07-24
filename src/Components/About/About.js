import React, {Component} from 'react';
import Footer from './../Footer/footer';

export default class About extends Component{
    render(){
        return(
            <div className="About">
                <h1>About</h1>
                <h2>Technologies used to build this page:</h2>
                <div className="icons">
                    
                </div>
                <h2>Have a look at the code that runs this page 
                    <a href='https://github.com/bluecherryme/RecipeApp'>here</a>
                </h2>
                <Footer/>
            </div>
        );
    }
}