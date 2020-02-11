export interface Podcast {
    id: string,
    title: string,
    country: string,
    website: string,
    language: string,
    genre_ids: Array<number>,
    publisher: string,
    thumbnail: string,
    description: string,
    total_episodes: number,
    earliest_pub_date_ms: number,
}

export type Colors = {
    dominant_colors: Array<Array<number>>;
};

export interface PodcastDetail extends Podcast {
    episodes: Array<Episode>,
    next_episode_pub_date: number
}

export interface Episode {
    id: string,
    title: string,
    description: string,
    pub_date_ms: number,
    audio: string,
    audio_length_sec: number,
    thumbnail: string,
}