/* 
const images =  [
    "https://source.unsplash.com/featured/?forest"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = chosenImage;

document.body.appendChild(bgImage); // prepend
*/

const tag = "forest";
const url = `https://source.unsplash.com/1920x1080/?${tag.toLowerCase()}`;

fetch(url).then(response => {
    document.body.style.backgroundImage = `url(${response.url})`;
    // document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
});