import {Action, MyPodcastsState} from "../../types/redux";
import {findMyPodcastIndex, isSubscribed} from "../../helpers/persist_storage";

const initialState: MyPodcastsState = {
    my_podcasts: [],
};

const myPodcastReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_MY_PODCASTS":
            let found = isSubscribed(action.payload.my_podcast.id, state.my_podcasts);
            if (found) {
                alert("You have already added this podcast");
                return state;
            } else {
                let newMyPodcasts = state.my_podcasts.concat(action.payload.my_podcast);
                return { ...state, my_podcasts: newMyPodcasts };
            }
        case "DELETE_MY_PODCASTS":
            let withDeletedPodcasts = [...state.my_podcasts];
            let index = findMyPodcastIndex(action.payload.my_podcast_id, state.my_podcasts);
            withDeletedPodcasts.splice(index, 1);
            return { ...state, my_podcasts: withDeletedPodcasts };
        case "SET_LAST_PLAYTIME":
            let updatedPodcasts = [...state.my_podcasts];
            let indexPodcastLast = findMyPodcastIndex(action.payload.my_podcast_id, state.my_podcasts);
            if (indexPodcastLast !== -1) {
                updatedPodcasts[indexPodcastLast].last_played = Date.now();
                return {...state, my_podcasts: updatedPodcasts};
            } else return state;
        default:
            return state;
    }
};
export default myPodcastReducer;