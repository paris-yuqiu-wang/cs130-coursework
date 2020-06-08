//build a dictionary
const chicago = {
  'chicago/chi01.jpg': "Downtown Chicago",
  'chicago/chi02.jpg': "Louis Vuitton Pop-up",
  'chicago/chi03.jpg': "Yummy Seafood",
  'chicago/chi04.jpg': "Sunset",
  'chicago/chi05.jpg': "The 'Friends' Pop-Up",
  'chicago/chi06.jpg': "Northwestern Campus",
  'chicago/chi07.jpg': "Dessert at Tao",
  'chicago/chi08.jpg': "Main Course at Sepia",
  'chicago/chi09.jpg': "3 Dots and a Dash",
  'chicago/chi10.jpg': "Tao Chicago",
  'chicago/chi11.jpg': "Frose",
  'chicago/chi12.jpg': "Appetizer at Sepia",
  'chicago/chi13.JPG': "Northwestern Lakefill",
  'chicago/chi14.JPG': "Taken @ Downtown Chicago Starbucks",
  'chicago/chi15.JPG': "360 Chicago @ Night",
  'chicago/chi16.jpg': "A Walk by the River"};

const nyc = {
  'nyc/ny01.jpg': "NYC Night View",
  'nyc/ny02.JPG': "The River View",
  'nyc/ny03.jpg': "Times Square",
  'nyc/ny04.jpg': "New York University",
  'nyc/ny05.jpg': "Guggenheim Museum",
  'nyc/ny06.JPG': "Near NYU Campus with Friends",
  'nyc/ny07.JPG': "Restaurant Week Experience",
  'nyc/ny08.JPG': "Restaurant Week Experience",
  'nyc/ny09.jpg': "Vessel at Hudson Yards",
  'nyc/ny10.jpg': "Broadway",
  'nyc/ny11.jpg': "Manhattan Skyline",
  'nyc/ny12.jpg': "Central Park",
  'nyc/ny13.jpg': "Brunch at Chelsea",
  'nyc/ny14.JPG': "Appetizer at Jean Georges",
  'nyc/ny15.JPG': "Dessert at Jean Georges",
  'nyc/ny16.jpg': "Afternoon Tea at Maison Laduree"};


 const tokyo = {
   'tokyo/tokyo01.JPG': "Kimono Try-on",
   'tokyo/tokyo02.jpg': "Sensoji Temple",
   'tokyo/tokyo03.JPG': "Ginza",
   'tokyo/tokyo04.jpg': "The Crowd of Tourists...",
   'tokyo/tokyo05.jpg': "Matcha Ice Cream",
   'tokyo/tokyo06.JPG': "Japanese Food",
   'tokyo/tokyo07.jpg': "Sensoji Temple",
   'tokyo/tokyo08.JPG': "Japanese Food",
   'tokyo/tokyo09.JPG': "Kimono",
   'tokyo/tokyo10.jpg': "Pompompurin Cafe",
   'tokyo/tokyo11.jpg': "Fushimi Inari Shrine",
   'tokyo/tokyo12.jpg': "Make a Wish",
   'tokyo/tokyo13.jpg': "Kimono",
   'tokyo/tokyo14.jpg': "Shinjuku",
   'tokyo/tokyo15.JPG': "A Random Cute Stuffed Animal",
   'tokyo/tokyo16.JPG': "Shibainu"};

const paris = {
   'paris/paris01.JPG': "Arc de Triomphe",
   'paris/paris02.JPG': "The Seine",
   'paris/paris03.JPG': "Sky Wheel",
   'paris/paris04.jpg': "Arc de Triomphe",
   'paris/paris05.JPG': "Moulin Rouge",
   'paris/paris06.jpg': "Luncheon on the Grass at Musée d’Orsay",
   'paris/paris07.jpg': "Street Arts",
   'paris/paris08.JPG': "Dôme des Invalides",
   'paris/paris09.JPG': "Eiffel Tower at Night",
   'paris/paris10.jpg': "Cathedrale Notre-Dame de Paris",
   'paris/paris11.jpg': "Chateau de Chantilly",
   'paris/paris12.jpg': "Little Dancer at Musée d’Orsay",
   'paris/paris13.jpg': "Louvre Museum",
   'paris/paris14.jpg': "Sacré-Coeur and Quartier Montmartre",
   'paris/paris15.jpg': "Bedroom in Arles by van Gogh",
   'paris/paris16.jpg': "Shakespeare and Company"};

const togglePhotos = (ev) => {
  document.querySelector('.intro').style.display ="none";
  document.querySelector('.cards').style.display ="flex";
  let userChoiceList = chicago;
  if (ev.srcElement.innerHTML === 'NYC') {
     userChoiceList = nyc;
  }
  if (ev.srcElement.innerHTML === 'Tokyo') {
    userChoiceList = tokyo;
  }
  if (ev.srcElement.innerHTML === 'Paris') {
    userChoiceList = paris;
  }
  document.querySelector('.cards').innerHTML = '';

  for (const [link, text] of Object.entries(userChoiceList)){
    let myCard = `
        <div class="photoCards">
        <div class="card" style="background-image:url('${link}')"> </div>
        <div class="caption">${text}</div> </div>
    `;
    document.querySelector('.cards').innerHTML += myCard;
  }
  initCarousel();
};

const showHome = (ev) => {
  document.querySelector('.intro').style.display ="block";
  document.querySelector('.cards').style.display ="none";
}

const clickchi = document.getElementsByClassName("point chicago")
const clicknyc = document.getElementsByClassName("point nyc")
const clicktky = document.getElementsByClassName("point tokyo")
const clickparis = document.getElementsByClassName("point paris")

const toggleChicago = (ev) => {
  document.querySelector('#chicago').click();
};

const toggleNyc = (ev) => {
  document.querySelector('#nyc').click();
};

const toggleTokyo = (ev) => {
  document.querySelector('#tokyo').click();
};

const toggleParis = (ev) => {
  document.querySelector('#paris').click();
};

/* map function*/
clickchi[0].onclick = toggleChicago

clicknyc[0].onclick = toggleNyc

clicktky[0].onclick = toggleTokyo

clickparis[0].onclick = toggleParis


document.querySelector('#home').onclick = showHome;

document.querySelector('#chicago').onclick = togglePhotos;
document.querySelector('#nyc').onclick = togglePhotos;
document.querySelector('#tokyo').onclick = togglePhotos;
document.querySelector('#paris').onclick = togglePhotos;
