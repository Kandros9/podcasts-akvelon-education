import {EpisodeListened, PodcastShortInfo} from "../types/data";

export const isSubscribed = (podcastId: string, myPodcasts: Array<PodcastShortInfo>) => {
    return !!myPodcasts.find((oldPodcast) =>
        oldPodcast.id === podcastId
    );
};

export const findMyPodcastIndex = (podcastId: string, myPodcasts: Array<PodcastShortInfo>) => {
    return myPodcasts.findIndex((oldPodcast) =>
        oldPodcast.id === podcastId
    );
};

export const isEpisodePresent = (episodeId: string, episodesListened: Array<EpisodeListened>) => {
    return episodesListened.findIndex((oldEpisdoe) =>
        oldEpisdoe.id === episodeId
    );
};