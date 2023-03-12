import React, { createContext, useContext, useEffect, useState } from "react";

const ImageContext = createContext();
export const useImageContext = () => useContext(ImageContext);

export function ImageProvider({ children }) {
  const [images, setImages] = useState([]);
  const [model, setModel] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const getImage = (download_url) => {
    setClickedImg(download_url);
    setModel(true);
  };

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://picsum.photos/v2/list?page=2&limit=100")
      ).json();
      setImages(data);
    };
    dataFetch();
  }, []);

  const contextValue = {
    images,
    model,
    setModel,
    clickedImg,
    getImage,
  };
  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
}
