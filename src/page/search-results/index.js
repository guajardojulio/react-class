import getGifs from "../../services/getGifs";
import {useState} from "react";
import MyGif from "../../components/gif";
import React, {useEffect} from "react";
function SeacrhResults({params}){
    const {keyword} = params;
    const [gifs,setGifs]=useState([]);
    useEffect(function(){
        getGifs({keyword}).then((g)=>setGifs(g));
    },[keyword]);
    return (
        <>
            <h2>{keyword}</h2>
            <div className="container-gifs">
                <MyGif gifs={gifs}></MyGif>
            </div>
        </>
    )
}
export default SeacrhResults;