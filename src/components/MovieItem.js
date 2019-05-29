import React, { Component } from 'react';
import {addToFavList,removeFromFavList} from '../actions';
import {connect} from 'react-redux';
const url = "https://image.tmdb.org/t/p/w342";


class MovieItem extends Component {
    state={
        favorited:false
    }
    addToFavList(){
        this.setState({favorited:!this.state.favorited}) ;
        this.props.addToFavList(this.props.item);
    }
    removeFromFavList(){
        this.setState({favorited:!this.state.favorited}) ;
        this.props.removeFromFavList(this.props.item);
    }
    display(){
        if(!this.state.favorited){
            return  <span className="glyphicon glyphicon-heart-empty"
            onClick={()=> this.addToFavList()}
            ></span>
        }else{
           return <span className="glyphicon glyphicon-heart"
           onClick={()=> this.removeFromFavList()}
           ></span>
        }
    }

    render() {
        
        return (
           
            <div className="col-sm-12 col-sm-3">
               <div className="thumbnail">
                    <img src={url + this.props.item.poster_path} alt="props"/>
                    <div className="caption">
                        <h4>{this.props.item.title}</h4>
                        <p>{this.props.item.overview.substring(0,50)}</p>
                        <p>Rating :<span className="badge badge-default"> <span className="glyphicon glyphicon-star"/>
                        {this.props.item.vote_average}</span></p>
                      
                        <p>{this.props.showButton ? this.display() : null}</p>
                    </div>
               </div>
        </div>
        );
    }
}

export default connect(null,{addToFavList,removeFromFavList})(MovieItem);