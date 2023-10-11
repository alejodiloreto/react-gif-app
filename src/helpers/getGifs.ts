import { Gif } from "../interfaces/gif";

export const getGifs = async (category: string) => {
  const url = ` https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Lk0A4CRApanXds4lmDveQpMqO7PuvRP5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs: Gif[] = data.map((gif: Gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });
  return gifs;
};
