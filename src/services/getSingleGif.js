import {APIURL} from "./settings";

export default function getDetailGif({keyword}){

    //const URL = `${APIURL}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    const URL = "https://api.giphy.com/v1/gifs/1nRxQObbYtlrsycVLo?api_key=qJJxX35CLtMm7nvnprAv23uwNJcRSx30";
        return fetch(URL)
            .then((res) => res.json())
            .then((response) => {
                const {data} = response;
                if(Array.isArray(data)){
                    /*
                    tipo
                    id
                    url
                    dentro de imageesn dnowsike medium url+
                     */
                    const detailgifs = data.map((d) => {
                        const {images,type,id} = d;
                        const {url} = images.downsized;
                        return {type, id, url}
                    });
                    return detailgifs;
                }
            });

};