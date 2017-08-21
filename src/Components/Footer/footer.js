import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './footer.css';


export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="over">
                    <div className="left">
                        <span><HashLink to="/#home" className="link">Home</HashLink></span>   
                        <span><HashLink to="/#search" className="link">Search</HashLink></span> 
                        <a id='login-btn' href='http://localhost:3001/auth'>
                            <span>Login</span>
                        </a>
                    </div>
                    <div className="right">
                        <span><Link className="link" to={'/video'}>Video</Link></span> 
                        <span><Link className="link" to={'/about'}>About</Link></span>   
                        <span><a className="link" href="mailto:bluecherryme@gmail.com?Subject=Hello%20recipe" target="_top">Contact</a></span> 
                    </div>
                </div>
            </footer>
        );
    }
    
}