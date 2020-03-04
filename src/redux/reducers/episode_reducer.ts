import {Action, EpisodesState} from "../../types/redux";
import {isEpisodePresent} from "../../helpers/persist_storage";
import {EpisodeListened} from "../../types/data";

const initialState: EpisodesState = {
    episodes_listened: [],
};

const episodeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_LISTENED_EPISODE":
            let foundIndex = isEpisodePresent(action.payload.episode_listened.id, state.episodes_listened);
            let newEpisodesListened = [] as Array<EpisodeListened>;
            let stateArray = [...state.episodes_listened];
            if (foundIndex !== -1) {
                let deleteEpisodesListened = [...state.episodes_listened];
                deleteEpisodesListened.splice(foundIndex, 1);
                stateArray = deleteEpisodesListened;
            } else {
                newEpisodesListened = newEpisodesListened.concat(action.payload.episode_listened);
                newEpisodesListened = newEpisodesListened.concat(stateArray);
            }
            return { ...state, episodes_listened: newEpisodesListened };
        case "SET_PAUSED_ON":
            let index = isEpisodePresent(action.payload.episode_id, state.episodes_listened);
            let newEpisodes = [...state.episodes_listened];
            newEpisodes[index].paused_on = action.payload.time;
            return { ...state, episodes_listened: newEpisodes };
        default:
            return state;
    }
};
export default episodeReducer;