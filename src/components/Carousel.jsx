import { useState } from "react";
export default function Carousel({ images }) {
  const [active, setActive] = useState(0);
  const handleIndexClick = (event) => {
    setActive(+event.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img
        src={images[active] || Carousel.defaultProps.images[0]}
        alt="animal hero"
      />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            onClick={handleIndexClick}
            data-index={index}
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
};
