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