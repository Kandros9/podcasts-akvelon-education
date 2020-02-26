import {combineReducers} from "redux";
import podcastReducer from "./podcast_reducer";
import playerReducer from "./player_reducer";
import searchReducer from "./search_reducer";

const rootReducer = combineReducers({
    podcasts: podcastReducer,
    player: playerReducer,
    search: searchReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>