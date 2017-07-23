import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getShoppingList} from './../../redux/updateShoppingList';
import {deleteItem} from './../../redux/updateShoppingList';
import {addItem} from './../../redux/updateShoppingList';
import {clearAll} from './../../redux/updateShoppingList';
import {saveIngredient} from './../Cards/RecipeDetail/func_saveToShoppingList';

const userid = '103777885688777289032';

class MyShoppingList extends Component{
    constructor(){
        super();
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value){
        this.setState({value:value})
    }

    componentDidMount(){
        this.props.getShoppingList(userid);
    }

    handleSubmit(e,item){
        e.preventDefault();
        this.props.addItem({
            clientid:userid,
            item:item
        })
        this.setState({value:''});
    }

    render(){
        var {clientid} = this.props.currentUser;
        return(
            <div className="MyShoppingList">
                <h1>MyShoppinglist</h1>
                <ul>
                    {this.props.shoppingList.map((item,index)=>{
                        return <li key={index}>
                        {item.item}
                        <button
                          onClick={()=>this.props.deleteItem(item.item)}
                             className="delete">Delete</button>
                        </li>
                    })}
                </ul>
                <form 
                    className="addItem"
                    onSubmit={(e)=>this.handleSubmit(e,this.state.value)}
                    >
                    
                    <input 
                    type="text" 
                    className="search-field"
                    placeholder='add another item'
                    value={ this.state.value }   
                    onChange= {(e)=>this.handleChange(e.target.value) }             
                    />
                    <button className="search-btn btn btn-primary">
                        ADD 
                    </button>
                </form>
                <button className="clear"
                    onClick={()=>this.props.clearAll()}>Clear All
                </button>
                <button className="save">Save
                
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingList: state.shoppingList.shoppingList || [],
        currentUser:  state.currentUser.currentUser.data || {}
    }
}

export default connect(mapStateToProps,{getShoppingList,deleteItem,addItem,clearAll})(MyShoppingList);