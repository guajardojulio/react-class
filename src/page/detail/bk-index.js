/*}
llamar a  https://api.giphy.com/v1/gifs/1nRxQObbYtlrsycVLo?api_key=qJJxX35CLtMm7nvnprAv23uwNJcRSx30
tipo
id
url
dentro de imageesn dnowsike medium url+
 */
import MyGif from "../../components/detail-gif";
import {useDetailGifs} from "../../hook/useDetailGifs";
function SeacrhDetails({params}){
    const {keyword} = params;
    const {gif, loading} = useDetailGifs({keyword});

    return (
        <>
            <h2>{keyword}</h2>
            {loading ? (<div>cargando...........</div>):(          <div className="container-gifs">
                <MyGif gifs={gifs}></MyGif>
            </div>)}
        </>
    )
}
export default SeacrhResults;