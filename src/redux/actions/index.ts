import {Podcast} from "../../types/data";

export const addBestPodcastsAction = (podcasts: Array<Podcast>) => ({
    type: "ADD_BEST_PODCASTS",
    payload: {
        best_podcasts: podcasts
    }
});

export const addBestPodcastsCardsAction = (cards: Array<string>) => ({
    type: "ADD_BEST_PODCASTS_CARDS",
    payload: {
        best_podcasts_cards: cards
    }
});
