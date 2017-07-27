import React, {Component} from 'react';
import './footer.css';


export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="over">
                    <div className="left">
                        <span>Home</span>   
                        <span>Search</span> 
                        <span>Login</span>
                    </div>
                    <div className="right">
                        <span>Technology</span>   
                        <span>Contact</span> 
                    </div>
                </div>
            </footer>
        );
    }
    
}