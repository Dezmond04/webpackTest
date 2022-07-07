const script = () => {
  const galleryItem = document.querySelectorAll(
    ".description-slider__second-image"
  );
  galleryItem.forEach((item) => {
    item.addEventListener("click", () => {
      const image = item.querySelector("img");
      console.log(image.src);
    });
  });
};

export default script;
