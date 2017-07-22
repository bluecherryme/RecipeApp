import React, {Component} from 'react';
import {connect} from 'react-redux';


class MyShoppingList extends Component{
    render(){
        return(
            <div className="MyShoppingList">
                <h1>MyShoppinglist</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shoppinglList: state.shoppinglist
    }
}

export default connect(mapStateToProps)(MyShoppingList);