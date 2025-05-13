import "./styles.css";
import shakeImage from "./shake.jpeg";

import { greeting } from "./greeting.js";

const image = document.createElement("img");
image.src = shakeImage;

document.body.appendChild(image);

console.log(greeting);
