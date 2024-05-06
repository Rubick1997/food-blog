"use client";

import Image from "next/image";

import classes from "./ImageSlideshow.module.css";
import useSlideShow from "./useSlideShow";
import { useEffect, useState } from "react";

function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { images } = useSlideShow();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
export default ImageSlideshow;
