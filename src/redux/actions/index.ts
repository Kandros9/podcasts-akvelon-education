import {Episode, Podcast, PodcastDetail, PodcastSearchItem, PodcastShortInfo} from "../../types/data";

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

export const addEpisodeToPlayerAction = (episode: Episode) => ({
    type: "ADD_EPISODE_TO_PLAYER",
    payload: {
        episode: episode
    }
});

export const setActivePlayButtonAction = (episode_title: string) => ({
    type: "SET_ACTIVE_PLAY_BUTTON",
    payload: {
        episode_title: episode_title
    }
});

export const addSearchResultAction = (results: Array<PodcastSearchItem>, next_offset: number, colors: Array<string>) => ({
    type: "ADD_SEARCH_RESULTS",
    payload: {
        results: results,
        offset: next_offset,
        colors: colors
    }
});

export const addMyPodcastsAction = (podcastShort: PodcastShortInfo) => ({
    type: "ADD_MY_PODCASTS",
    payload: {
        my_podcast: podcastShort
    }
});

export const deleteMyPodcastsAction = (podcastId: string) => ({
    type: "DELETE_MY_PODCASTS",
    payload: {
        my_podcast_id: podcastId
    }
});

export const setLastPlaytimeAction = (podcastId: string) => ({
    type: "SET_LAST_PLAYTIME",
    payload: {
        my_podcast_id: podcastId
    }
});

export const setSliderAction = (currentTime: number) => ({
    type: "SET_SLIDER",
    payload: {
        currentTime: currentTime
    }
});

