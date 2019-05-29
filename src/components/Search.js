import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import {API_KEY} from '../secret';
import {movies} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Search extends Component {
     state ={
         query:''
     }
    search(){
         let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`
        fetch(url,{
            method:'GET'
        }).then(response => response.json())
        .then(jsonObj => {this.props.movies(jsonObj.results)})
    }
    render() {
        return (
            <div>
                 <Link to="/fav">Favorite</Link>   
       
                <Form inline className="col-md-12 col-md-offset-4">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Search: { '  '}</Form.Label>
                    {' '}
                    <Form.Control
                    onChange={(e)=> this.setState({query:e.target.value} )}
                    type="text" placeholder="search movie" />
                   
                </Form.Group>
                   { ' '} <Button onClick={() => this.search()} className="btn btn-primary m-5">Submit</Button>
                   <br/>
                   <br/>
                </Form>
               
            </div>
        );
    }
}

export default connect(null,{movies})(Search);