import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getShoppingList} from './../../redux/updateShoppingList';
import {deleteItem} from './../../redux/updateShoppingList';
import {addItem} from './../../redux/updateShoppingList';
import {clearAll} from './../../redux/updateShoppingList';
import saveIngredient from './../Cards/RecipeDetail/func_saveToShoppingList';
import './MyShoppingList.css';

// const userid = '103777885688777289032';

class MyShoppingList extends Component{
    constructor(){
        super();
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveShoppingList = this.saveShoppingList.bind(this); 
        this.clearList = this.clearList.bind(this);
    }

    saveShoppingList(shoppingList,clientid){
        axios.delete(`/api/delete?userid=${clientid}`).then().catch();
            //eslint-disable-next-line
        shoppingList[0]
        ?
        shoppingList.map(ingredient=>{
            saveIngredient(ingredient.item,clientid);
            this.props.toggleShow();
        })
        :
        this.props.toggleShow();
    }

    handleChange(value){
        this.setState({value:value})
    }

    componentDidMount(){
        this.props.getShoppingList(this.props.currentUser.clientid);
    }

    handleSubmit(e,item){
        e.preventDefault();
        if(this.state.value){
            this.props.addItem({
                clientid:this.clientid,
                item:item
            })
        }
        this.setState({value:''});
    }

    clearList(clientid){
        axios.delete(`/api/delete?userid=${clientid}`).then().catch();        
        //action to reducer
        this.props.clearAll();
        //scroll up
        window.scroll(0,-500);
        //save and close
        this.props.toggleShow();
    }

    render(){
        var {clientid} = this.props.currentUser;
        return(
            <div className="modal-ctn">
                <div className="list">
                    <img onClick={()=>this.props.toggleShow()}
                    src={require('./../../img/close.svg')}/>            
                    <h2>My Shopping List</h2>
                    <ul>
                        {this.props.shoppingList.map((item,index)=>{
                            return <li key={index}>
                            {item.item}
                            <button
                            onClick={()=>this.props.deleteItem(item.item)}
                                className="delete">
                                <img src={require('./../../img/close.svg')}/>
                                </button>
                            </li>
                        })}
                    </ul>
                    <form 
                        className="addItem"
                        onSubmit={(e)=>this.handleSubmit(e,this.state.value)}
                        >
                        
                        <input 
                        type="text" 
                        className="search-field add-item"
                        placeholder='add another item'
                        value={ this.state.value }   
                        onChange= {(e)=>this.handleChange(e.target.value) }             
                        />
                        <button className="search-btn btn add">
                            ADD 
                        </button>
                    </form>
                    <div className='btn-list'>
                        <button className="scew btn-ls"
                            onClick={()=>this.clearList(clientid)}>Clear All
                        </button>
                        <button className="scew btn-ls"
                            onClick={()=>this.saveShoppingList(this.props.shoppingList,clientid)}
                            >Save
                        </button>
                    </div>
                </div>
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