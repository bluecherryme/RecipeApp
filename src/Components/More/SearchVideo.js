import React, {Component} from 'react';
import axios from 'axios';
import API_Key from './../../API-Key';



export default class Video extends Component{
    constructor(){
        super();
        this.state = {searchTerm:'', Video:'2h0bhpqFKpM', VideoList:[], index : 0}
        this.getVideo = this.getVideo.bind(this);
        this.setCurrentVideo = this.setCurrentVideo.bind(this);
        this.setState = this.setState.bind(this);
    }

    onChange(e){
        this.setState({searchTerm:e.target.value});
    }

    setCurrentVideo(){
        var index = this.state.index;
        this.setState({Video:this.state.VideoList[index].youTubeId});
        console.log(this.state.Video);
        if (index < 9){
            index++;
            this.setState({index:index}); console.log('index',this.state.index);
        } else{ this.setState({index:0}) }
    }

    getVideo(e,searchTerm){
        e.preventDefault();
        axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/videos/search?query=${searchTerm}&number=10`,
            {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
            })
            .then((payload)=>{
                this.setState({VideoList:payload.data.videos});
                this.setCurrentVideo();
                })
        
    }

    render(){
        return(
            <div className="Video">
                <h1>Video</h1>
                <form onSubmit={(e)=>this.getVideo(e, this.state.searchTerm)}>
                    <input type="text" value={this.state.searchTerm} 
                        onChange={(e)=>this.onChange(e)}
                        placeholder="Search for Recipe Videos"/>
                    <button className="search">Search</button>
                </form>
                <iframe src={`http://www.youtube.com/embed/${this.state.Video}`}
                    width="560" height="315" frameBorder="0" allowFullScreen>
                </iframe>
                <button className="next" onClick={()=>this.setCurrentVideo()}>Next</button>
            </div>
        );
    }
}