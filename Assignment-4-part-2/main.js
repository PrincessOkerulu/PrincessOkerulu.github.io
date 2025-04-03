const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = [
  "human eye", 
  "Rock", 
  "Purple flowers", 
  "wall of pharaoh's tomb", 
  "butterfly on a leaf"
];

/* Looping through images */
images.forEach((image, index) => {
  const imgPath = `images/${image}`;
  
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imgPath);
  newImage.setAttribute('alt', alts[index]);
  
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', imgPath);
    displayedImage.setAttribute('alt', alts[index]);
  });
  
  thumbBar.appendChild(newImage);
});
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});