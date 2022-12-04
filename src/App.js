import React, { useState, useEffect } from "react";
import "./App.css";
import MyGif from "./components/gif/index";

const GIFS = [
  {
    id: 1,
    url: "https://media.giphy.com/media/SVYrs1hU0SiAf1nw1n/giphy.gif",
  },
  {
    id: 2,
    url: "https://media.giphy.com/media/tqj4m9BRURayxQAIW9/giphy.gif",
  },
];

const OTHER_GIFS = [
  {
    id: 1,
    url: "https://media.giphy.com/media/UuebWyG4pts3rboawU/giphy.gif",
  },
  {
    id: 2,
    url: "https://media.giphy.com/media/3oEduZtPOv5OSecubu/giphy.gif",
  },
];

const API =
  "https://api.giphy.com/v1/gifs/search?api_key=qJJxX35CLtMm7nvnprAv23uwNJcRSx30&q=avenger&limit=25&offset=0&rating=g&lang=en";

function App() {
  const [gifs, setGifs] = useState(GIFS);

  const MySearchForm = () => {
    const [word, setWord] = useState("");

    function handleSubmit(evt) {
      evt.preventDefault();

      const api = `https://api.giphy.com/v1/gifs/search?api_key=qJJxX35CLtMm7nvnprAv23uwNJcRSx30&q=${word}&limit=25&offset=0&rating=g&lang=en`;
      fetch(api)
        .then((res) => res.json())
        .then((response) => {
          const { data } = response;
          const gifs = data.map((g) => {
            const { id, title } = g;
            const { url } = g.images.downsized_medium;
            return { id, title, url };
          });
          setGifs(gifs);
        });
    }

    function handleOnChange(evt) {
      setWord(evt.target.value);
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleOnChange} />
        </form>
      </>
    );
  };

  function MyButton() {
    return <button onClick={() => setGifs(OTHER_GIFS)}>My button</button>;
  }

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        const gifs = data.map((g) => {
          const { id, title } = g;
          const { url } = g.images.downsized_medium;
          return { id, title, url };
        });
        setGifs(gifs);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>My firts App</h1>
      </div>
      <MySearchForm />
      <div className="container-gifs">
        <MyGif gifs={gifs} />
      </div>
    </div>
  );
}

export default App;
