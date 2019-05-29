export const MOVIES = "MOVIES"
export const add_Fav = "add_Fav"
export  const remove_Fav = 'remove_Fav'

export function movies(items){
    const action ={
        type:MOVIES,
        items
    }
    return action;
} 
export function addToFavList(movie){
    return {
        type:add_Fav,
        movie
    }
}
export function removeFromFavList(movie){
    return {
        type:remove_Fav,
        movie

    }
}