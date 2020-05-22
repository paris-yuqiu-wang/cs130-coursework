const chicago = ['chicago/chi01.jpg', 'chicago/chi02.jpg', 'chicago/chi03.jpg',
                 'chicago/chi04.jpg', 'chicago/chi05.jpg', 'chicago/chi06.jpg',
                 'chicago/chi07.jpg', 'chicago/chi08.jpg', 'chicago/chi09.jpg',
                 'chicago/chi10.jpg', 'chicago/chi11.jpg', 'chicago/chi12.jpg',
                 'chicago/chi13.jpg', 'chicago/chi14.jpg', 'chicago/chi15.jpg',
                 'chicago/chi16.jpg'];

const nyc = ['nyc/ny01.jpg', 'nyc/ny02.jpg', 'nyc/ny03.jpg',
             'nyc/ny04.jpg', 'nyc/ny05.jpg', 'nyc/ny06.jpg',
             'nyc/ny07.jpg', 'nyc/ny08.jpg', 'nyc/ny09.jpg',
             'nyc/ny10.jpg', 'nyc/ny11.jpg', 'nyc/ny12.jpg',
             'nyc/ny13.jpg', 'nyc/ny14.jpg', 'nyc/ny15.jpg',
             'nyc/ny16.jpg'];

 const tokyo = ['tokyo/tokyo01.jpg', 'tokyo/tokyo02.jpg', 'tokyo/tokyo03.jpg',
                'tokyo/tokyo04.jpg', 'tokyo/tokyo05.jpg', 'tokyo/tokyo06.jpg',
                'tokyo/tokyo07.jpg', 'tokyo/tokyo08.jpg', 'tokyo/tokyo09.jpg',
                'tokyo/tokyo10.jpg', 'tokyo/tokyo11.jpg', 'tokyo/tokyo12.jpg',
                'tokyo/tokyo13.jpg', 'tokyo/tokyo14.jpg','tokyo/tokyo15.jpg',
                'tokyo/tokyo16.jpg'];

const paris = ['paris/paris01.jpg', 'paris/paris02.jpg', 'paris/paris03.jpg',
               'paris/paris04.jpg', 'paris/paris05.jpg', 'paris/paris06.jpg',
               'paris/paris07.jpg', 'paris/paris08.jpg', 'paris/paris09.jpg',
               'paris/paris10.jpg', 'paris/paris11.jpg', 'paris/paris12.jpg',
               'paris/paris13.jpg', 'paris/paris14.jpg', 'paris/paris15.jpg',
               'paris/paris16.jpg'];


const togglePhotos = (ev) => {
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

  for (const imageURL of userChoiceList) {
    let myCard = `
        <div class="card" style="background-image:url('${imageURL}')"></div>
    `;
    document.querySelector('.cards').innerHTML += myCard;
  }
  initCarousel();
};


// const toggleTabs = (ev) => {
//   if (ev.srcElement.innerHTML === 'Home') {
//   document.querySelector('.intro').style.display ="block"
//   }
//   if (ev.srcElement.innerHTML === 'Suggestions') {
//   document.querySelector('.comment').style.display ="block"
//   }
// }


document.querySelector('#chicago').onclick = togglePhotos;
document.querySelector('#nyc').onclick = togglePhotos;
document.querySelector('#tokyo').onclick = togglePhotos;
document.querySelector('#paris').onclick = togglePhotos;
// document.querySelector('#home').onclick = toggleTabs;
// document.querySelector('#suggestions').onclick = toggleTabs;
