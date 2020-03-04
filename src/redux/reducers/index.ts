import {combineReducers} from "redux";
import podcastReducer from "./podcast_reducer";
import playerReducer from "./player_reducer";
import searchReducer from "./search_reducer";
import myPodcastReducer from "./my_podcasts_reducer";
import episodeReducer from "./episode_reducer";
import genreReducer from "./genres_reducers";

const rootReducer = combineReducers({
    podcasts: podcastReducer,
    player: playerReducer,
    search: searchReducer,
    myPodcasts: myPodcastReducer,
    episodesListened: episodeReducer,
    genres: genreReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>