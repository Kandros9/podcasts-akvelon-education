import {Action, AudioState} from "../../types/redux";

const initialState: AudioState = {
    audio: ""
};

const playerReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_EPISODE_TO_PLAYER":
            let newAudio = action.payload.audio;
            return {...state, audio: newAudio};
        default:
            return state;
    }
};
export default playerReducer;