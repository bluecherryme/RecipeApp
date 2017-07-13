import React, {Component} from 'react';
import {connect} from 'react-redux';


class Cards extends Component{
    render(){
        return(
            <div className="cards">
                <h1>Cards</h1>
            </div>
        );
    }
}

export default connect()(Cards);