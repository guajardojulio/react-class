/*import {useEffect,useState, useContext} from "react";
import getDetailGif from "../services/getGifs";
import GifsContextProvider from "../context/GifContextProvider";

export function useDetailGif({keyword,page}={keyword: null,page:1}){
    const [loading, setLoading] = useState(false);
    const {detailgif,setDetailGif} = useContext(GifsContextProvider);
    //const keywordToUSe = keyword || localStorage.getItem("lastKeyword") || "random";

    useEffect(()=>{
        setLoading(true);
        //if(keywordToUSe) localStorage.setItem("lastKeyword",keywordToUSe);
        getDetailGif({keyword: keyword}).then((detailgif)=>{
            setDetailGif(gifs);
            setLoading(false);

        })
    },[setDetailGif]);
    return {loading, detailgif};
}
*/