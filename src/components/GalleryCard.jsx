/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const GalleryCard = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };
  const ImgData = [
    {
      imgsrc: "images/hero3.webp",
      style:
        "w-[25rem] h-[70vh] rounded-sm   shadow-2xl shadow-black object-cover grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer",
    },
    {
      imgsrc: "images/hero2.webp",
      style:
        "w-[25rem] h-[60vh] rounded-sm   shadow-2xl shadow-black mt-[3rem] object-cover grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer",
    },
    {
      imgsrc: "images/gallery.webp",
      style:
        "w-[25rem] h-[70vh] rounded-sm   shadow-2xl shadow-black object-cover grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer",
    },
    {
      imgsrc: "images/paint.webp",
      style:
        "w-[25rem] h-[60vh] rounded-sm   shadow-2xl shadow-black mt-[3rem] object-cover grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer",
    },
  ];

  return (
    <div className="flex justify-center h-auto flex-wrap gap-10  ">
      {ImgData.map((image, index) => (
        <div
          key={index}
          onClick={() => openFullscreen(image.imgsrc)}
          className="mt-10"
        >
          <img
            src={image.imgsrc}
            alt={`Image ${index}`}
            className={image.style}
            loading="lazy"
          />
        </div>
      ))}

      {fullscreenImage && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/75 backdrop-blur-[5px] flex justify-center items-center">
          <div
            className="absolute  top-0 right-0 p-4 cursor-pointer"
            onClick={closeFullscreen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl shadow-white/50"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
