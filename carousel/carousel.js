const images = document.querySelectorAll(".carousel img");
let count = 0;

// for everyimages set right side ${i * 100}%
for (let i = 0; i <= images.length - 1; i++) {
    images[i].style.left = `${i * 100}%`;
    console.log(images[i]);
}

//for click next button
const nextSlides = () => {
    if (count > -(images.length - 1)) {
        // console.log("nextSlides", count);
        count--;
        carouselImage();
    } else {
        alert("NOT FOUND ANY IMAGES");
    }
};

//for click next button
const prevSlides = () => {
    if (count != 0) {
        count++;
        carouselImage();
    } else {
        alert("NOT FOUND ANY IMAGES");
    }
};

//for every image translate left(`translateX(-${-count * 100}%)`)
const carouselImage = () => {
    images.forEach((image) => {
        image.style.transform = `translateX(-${-count * 100}%)`;
    });
};
