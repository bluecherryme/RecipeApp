import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyAccount extends Component{
    constructor(props){
        super(props);

        this.state = {currentClient:{}};

    }

    render(){
        return(
            <h1>MyAccount</h1>
        );
    }
}

export default connect()(MyAccount);