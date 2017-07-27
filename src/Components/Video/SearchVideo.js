import React, {Component} from 'react';
import {API_key_YT} from './../../API-Key'
import YTSearch from 'youtube-api-search';
import './SearchVideo.css';


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
        this.setState({Video:this.state.VideoList[index].id.videoId});
        if (index < 4){
            index++;
            this.setState({index:index}); 
        } else{ this.setState({index:0}) }
    }
   
    getVideo(e,searchTerm){
    e.preventDefault();
    YTSearch({key: API_key_YT, term:searchTerm}, (videos) =>{
            this.setState({VideoList:videos});
            this.setCurrentVideo();
            this.setState({searchTerm:'', index:0})
        });
    }

    render(){
        return(
            <div className="video">
            <h1>Video Search</h1>
                <form onSubmit={(e)=>this.getVideo(e, this.state.searchTerm)}>
                    <img className='arrow-right' src={require('./../../img/arrow_right.svg')} alt='arrow-down'/>
                    <input type="text" value={this.state.searchTerm} 
                        onChange={(e)=>this.onChange(e)}
                        placeholder="Search for Recipe Videos"
                        className='video-search'/>
                    <button className="search-btn">
                        <img className='search-icon' src={require('./../../img/search.svg')} alt='search'/>
                    </button>
                </form>
                <iframe src={`http://www.youtube.com/embed/${this.state.Video}`}
                    title="video" width="560" height="315" frameBorder="0" allowFullScreen>
                </iframe>
                <button className="next" onClick={()=>this.setCurrentVideo()}>Next</button>
            </div>
        );
    }
}