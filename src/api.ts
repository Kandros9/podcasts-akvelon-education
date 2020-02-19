import axios, { defaultAxios } from "./axios-config";



export const getImagesColor = async (image_urls: Array<string>) => {
    const response = await defaultAxios.post("/process_image/get_color", {image_urls});
    return response.data;

};

export const fetchBestPodcasts = async () => {
    const response = await axios.get('https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=140&page=1&safe_mode=1');
    return response.data;
};

export const fetchPodcast = async (id: string, nextEpisodePubDate: number = 0) => {
    const response = await axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${id}?next_episode_pub_date=${nextEpisodePubDate}&sort=recent_first`);
    return response.data;
};

export const fetchGenres = async () => {
    const response = await axios.get('https://listen-api.listennotes.com/api/v2/genres');
    return response.data;
};