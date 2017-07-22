import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getShoppingList} from './../../redux/updateShoppingList';

const userid = '103777885688777289032';

class MyShoppingList extends Component{

    componentDidMount(){
        this.props.getShoppingList(userid);
    }

    render(){
        console.log('shoppingList', this.props.shoppingList);
        return(
            <div className="MyShoppingList">
                <h1>MyShoppinglist</h1>
                <ul>
                    {this.props.shoppingList.map((item,index)=>{
                        return <li key={index}>
                        {item.item}
                        <button className="delete">Delete</button>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingList: state.shoppingList.shoppingList || []
    }
}

export default connect(mapStateToProps,{getShoppingList})(MyShoppingList);