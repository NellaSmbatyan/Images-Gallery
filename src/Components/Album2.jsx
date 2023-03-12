import React from "react";
import { useImageContext } from "../context/ImageProvider";
export default function Album2() {
  const { images, model, setModel, clickedImg, getImage } = useImageContext();

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={clickedImg} alt="clicked" />
        <button onClick={() => setModel(false)}>Close</button>
      </div>
      <div className="gallery">
        {images.slice(25, 50).map((el) => (
          <img
            key={el.id}
            alt={el.author}
            src={el.download_url}
            width="300"
            height="300"
            onClick={() => getImage(el.download_url)}
          />
        ))}
      </div>
    </>
  );
}
