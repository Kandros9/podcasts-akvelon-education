import {Action, SearchState} from "../../types/redux";
import {PodcastSearchItem} from "../../types/data";

const initialState: SearchState = {
    results: [] as PodcastSearchItem[],
    next_offset: 0,
    colors: []
};

const searchReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_SEARCH_RESULTS":
            let newResults = state.results.concat(action.payload.results);
            let newOffset = action.payload.offset;
            let newColors = state.colors.concat(action.payload.colors);
            return {...state, results: newResults, colors: newColors, next_offset: newOffset};
        default:
            return state;
    }
};
export default searchReducer;