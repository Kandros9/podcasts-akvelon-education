import {combineReducers} from "redux";
import podcastReducer from "./podcast_reducer";

const rootReducer = combineReducers({
    podcasts: podcastReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>