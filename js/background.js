import { weather } from weather.js

console.log(weather);

const images =  [
    "https://source.unsplash.com/category/" + weather];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = chosenImage;

document.body.appendChild(bgImage); // prepend