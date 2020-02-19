import {combineReducers} from "redux";
import podcastReducer from "./podcast_reducer";
import playerReducer from "./player_reducer";

const rootReducer = combineReducers({
    podcasts: podcastReducer,
    player: playerReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>