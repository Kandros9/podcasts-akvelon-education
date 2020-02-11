import axios from "./axios-config";


export const getImagesColor = async (image_urls: Array<string>) => {
    const response = await axios.post("/process_image/get_color", {image_urls});
    return response.data;

};

export const fetchBestPodcasts = async () => {
    const response = await axios.get('https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=140&page=1&safe_mode=1', {
        headers: {
            'X-ListenAPI-Key': 'd96f41d6bacd46bcbe2e0a51f5bce35a'
        }
    });
    return response.data;
};

export const fetchPodcast = async (id: string) => {
    const response = await axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${id}?next_episode_pub_date=0&sort=recent_first`, {
        headers: {
            'X-ListenAPI-Key': 'd96f41d6bacd46bcbe2e0a51f5bce35a'
        }
    });
    return response.data;
};