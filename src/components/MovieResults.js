import React, { Component } from 'react';
import Search from './Search'; 
import {connect} from 'react-redux';
import MovieItem from './MovieItem';


class MovieResults extends Component {
    render() {
        return (
            <div>
                <div className="row text-center">
                    <div className="jumbotron">
                        <h2 style={{fontFamily:'Cute Font',fontSize:'50px'}}>Movies Search App</h2>
                        
                    </div>
                </div>
                 <hr/>
                <Search/>
               
                {this.props.movies.map(item => {

                    return <MovieItem key={item.id} item={item} showButton={true}/>
                })}
            </div>
        );
    }
}
function mapStateToProps (state){
    console.log(state);
    return {
        movies:state.movies
    }
}

export default connect(mapStateToProps,null)(MovieResults);