import {Episode, Podcast, PodcastDetail, PodcastSearchItem, PodcastShortInfo, SearchPodcasts} from "./data";

export type Action = {
    type: string;
    payload?: any
};

export type PodcastsState = {
    best_podcasts: Array<Podcast>;
    best_podcasts_cards: Array<string>
};

export type AudioState = {
    episode: Episode,
    playButton: string,
    slider: number
};

export type SearchState = {
    results: Array<PodcastSearchItem>,
    next_offset: number,
    colors: Array<string>
};

export type MyPodcastsState = {
    my_podcasts: Array<PodcastShortInfo>;
};