import {useEffect,useState, useContext} from "react";
import getGifs from "../services/getGifs";
import GifsContextProvider from "../context/GifContextProvider";

export function useGifs({keyword,page}={keyword: null,page:1}){
    const [loading, setLoading] = useState(false);
    const {gifs,setGifs} = useContext(GifsContextProvider);
    const keywordToUSe = keyword || localStorage.getItem("lastKeyword") || "random";

    useEffect(()=>{
        setLoading(true);
        if(keywordToUSe) localStorage.setItem("lastKeyword",keywordToUSe);
        getGifs({keyword: keywordToUSe}).then((gifs)=>{
            setGifs(gifs);
            setLoading(false);

        })
    },[keywordToUSe,setGifs]);
    return {loading, gifs};
}
