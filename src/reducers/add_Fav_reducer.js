import {add_Fav,remove_Fav} from '../actions'

export default function addToFavList(state=[],action){
    switch(action.type){
        case add_Fav:
            console.log(action.movie)
            let favoriteMovies = [...state,action.movie]
            return favoriteMovies ;
        case remove_Fav:
             favoriteMovies = state.filter(item => item.id !== action.movie.id)
            return favoriteMovies ;  
        default :
          return state;   
    }
}