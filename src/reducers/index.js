import movies from './movie_reducer';
import favorites from './add_Fav_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
   movies,
   favorites
});
export default rootReducer;
