import {APIURL} from "./settings";

export default function getGifs({keyword}){

    const URL = `${APIURL}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
        return fetch(URL)
            .then((res) => res.json())
            .then((response) => {
                const {data} = response;
                if(Array.isArray(data)){
                    const gifs = data.map((g) => {
                        const {images,title,id} = g;
                        const {url} = images.downsized;
                        return {title, id, url}
                    });
                    return gifs;
                }
            });

};