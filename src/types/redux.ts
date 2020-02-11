import {Podcast} from "./data";

export type Action = {
    type: string;
    payload?: any
};

export type PodcastsState = {
    best_podcasts: Array<Podcast>;
    best_podcasts_cards: Array<string>
};