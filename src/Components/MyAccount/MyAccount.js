import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from './../../redux/getSavedRecipes';
import RecipeDetail from './Cards/RecipeDetail/RecipeDetail';
import Cards from './Cards/Cards';
import MyShoppingList from './MyShoppingList'
import Navbar from './../../Components/Home/Navbar';
import Footer from './../../Components/Footer/footer';
import './MyAccount.css';

const userid = '103777885688777289032';

class MyAccount extends Component{
    constructor(){
        super();
        this.state = {show: true};
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(){
        var toggle = !this.state.show;
        this.setState({show:toggle})
    }

    componentDidMount(){
        this.props.getRecipes(userid);
    }

    render(){
        var {clientid} = this.props.currentUser;
        return(
            <div className='my-account'>
                <Navbar/>
                <Cards recipes={this.props.savedRecipes}
                    toggleShow={this.toggleShow}
                />
                {
                this.state.show 
                ?
                <MyShoppingList toggleShow={this.toggleShow}/>
                :
                null
                }
                <RecipeDetail/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser.data || {},
    savedRecipes: state.savedRecipes.savedRecipes.data
  }
}

export default connect(mapStateToProps,{getRecipes})(MyAccount);