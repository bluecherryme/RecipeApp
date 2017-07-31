import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from './../../redux/getSavedRecipes';
import RecipeDetail from './Cards/RecipeDetail/RecipeDetail';
import Cards from './Cards/Cards';
import MyShoppingList from './MyShoppingList'
import Navbar from './../../Components/Home/Navbar';
import Footer from './../../Components/Footer/footer';
import './MyAccount.css';

//const userid = '103777885688777289032';

class MyAccount extends Component{
    constructor(){
        super();
        this.state = {show: false, showRecipe:false};
        this.toggleShow = this.toggleShow.bind(this);
        this.toggleShowRecipe = this.toggleShowRecipe.bind(this);
    }

    toggleShow(){
        var toggle = !this.state.show;
        this.setState({show:toggle})
    }

    toggleShowRecipe(){
        var show = !this.state.showRecipe;
        this.setState({showRecipe:show});
    }

    componentDidMount(){
        this.props.getRecipes(this.props.currentUser.clientid);
    }

    render(){
        var {clientid} = this.props.currentUser;
        console.log(clientid)
        return(
            <div className='my-account'>
                <Navbar/>
                <Cards recipes={this.props.savedRecipes}
                    showRecipe={this.toggleShowRecipe}
                    toggleShow={this.toggleShow}
                    clientid={clientid}
                />
                {
                this.state.show 
                ?
                <MyShoppingList toggleShow={this.toggleShow}/>
                :
                null
                }
                {
                this.state.showRecipe
                ?
                <RecipeDetail showRecipe={this.toggleShowRecipe}/>
                :
                null
                }
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