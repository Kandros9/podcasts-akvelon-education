import {Action, AudioState} from "../../types/redux";

const initialState: AudioState = {
    episode: Object(),
    playButton: "",
    slider: 0
};

const playerReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_EPISODE_TO_PLAYER":
            let newEpisode = action.payload.episode;
            return {...state, episode: newEpisode, slider: 0};
        case "SET_ACTIVE_PLAY_BUTTON":
            let newPlayEpisode = action.payload.episode_title;
            return {...state, playButton: newPlayEpisode, slider: 0};
        case "SET_SLIDER":
            return {...state, slider: action.payload.currentTime};
        default:
            return state;
    }
};
export default playerReducer;