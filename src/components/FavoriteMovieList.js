import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';
import {Link} from 'react-router-dom'

class FavoriteMovieList extends Component {
    render() {
        
        
        return (
            <div>
                <br/>
                
                <Link className="btn btn-primary" to="/">Back</Link> 
                <h3>My Favorite Movie List</h3>
                        {this.props.favorites.map(item => {
                            return <MovieItem key={item.id} item={item}
                                showButton={false}
                            />
                        })}
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log(state);
    return {
        favorites:state.favorites
    }
}

export default connect(mapStateToProps,{})(FavoriteMovieList);