import {Action, GenreState} from "../../types/redux";

const initialState: GenreState = {
    genres: [],
};

const genreReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_GENRES":
            let newGenres = action.payload.genres;
            return {...state, genres: newGenres};
        default:
            return state;
    }
};
export default genreReducer;