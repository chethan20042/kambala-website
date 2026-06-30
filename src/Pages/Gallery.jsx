import { useMemo, useState } from "react";

import galleryData from "../data/galleryData";

import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryFilter from "../components/Gallery/GalleryFilter";
import GalleryGrid from "../components/Gallery/GalleryGrid";


function Gallery() {

  const [activeCategory, setActiveCategory] = useState("All");


  const filteredImages = useMemo(() => {

    if (activeCategory === "All") {
      return galleryData;
    }

    return galleryData.filter(
      (item) => item.category === activeCategory
    );

  }, [activeCategory]);


  const handleImageClick = (image) => {

    console.log("Selected Image:", image);

  };


  return (
    <>

      <GalleryHero />


      <GalleryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />


      <GalleryGrid
        images={filteredImages}
        onImageClick={handleImageClick}
      />


    </>
  );
}


export default Gallery;