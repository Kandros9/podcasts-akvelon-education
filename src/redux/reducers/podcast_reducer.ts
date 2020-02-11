import {Action, PodcastsState} from "../../types/redux";

const initialState: PodcastsState = {
    best_podcasts: [],
    best_podcasts_cards: []
};

const podcastReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_BEST_PODCASTS":
            let newPodcasts = action.payload.best_podcasts;
            return {...state, best_podcasts: newPodcasts};
        case "ADD_BEST_PODCASTS_CARDS":
            let newCards = action.payload.best_podcasts_cards;
            return {...state, best_podcasts_cards: newCards};
        default:
            return state;
    }
};
export default podcastReducer;