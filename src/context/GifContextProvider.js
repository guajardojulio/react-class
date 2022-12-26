import React,{useState} from react;

const Context = React.createContext({});

export function GifsContextProvider({children}){
    const [gifs, SetGifs] = useState([]);

    return (
        <Context.Provider value={gifs, setGifs}>{children}</Context.Provider>
    )
}

export default Context;
