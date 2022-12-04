import React, { useEffect } from "react";

export default function MyGif({ gifs }) {
  useEffect(() => {
    console.log("efecto ejecutado cuando se renderiza un gif");
  });

  return gifs.map((g) => {
    return (
      <>
        <div className="list-item" key={g.id}>
          <img className="gif-img" src={g.url} alt={g.id} />
          <span className="gif-text">{g.id}</span>
        </div>
      </>
    );
  });
}
