const API_KEY = 'vXM8u3nRlBTItbN2qfKcNVF5aHpAxWH6';
 export const getGifByCategory = async( category) =>{
    const limit = 10;
    const url =`https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${API_KEY}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifts = data.map( img =>{
        return {
            id : img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifts;
}
