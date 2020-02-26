import {Episode, Podcast, PodcastSearchItem, SearchPodcasts} from "./data";

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
    playButton: string
};

export type SearchState = {
    results: Array<PodcastSearchItem>,
    next_offset: number,
    colors: Array<string>
};