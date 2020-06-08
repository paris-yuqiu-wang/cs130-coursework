const chicago = ['../chicago/chi01.jpg', '../chicago/chi02.jpg', '../chicago/chi03.jpg',
                 'chicago/chi04.jpg', 'chicago/chi05.jpg', 'chicago/chi06.jpg',
                 'chicago/chi07.jpg', 'chicago/chi08.jpg', 'chicago/chi09.jpg',
                 'chicago/chi10.jpg', 'chicago/chi11.jpg', 'chicago/chi12.jpg',
                 'chicago/chi13.JPG', 'chicago/chi14.JPG', 'chicago/chi15.JPG',
                 'chicago/chi16.jpg'];

const nyc = ['nyc/ny01.jpg', 'nyc/ny02.JPG', 'nyc/ny03.jpg',
             'nyc/ny04.jpg', 'nyc/ny05.jpg', 'nyc/ny06.JPG',
             'nyc/ny07.JPG', 'nyc/ny08.JPG', 'nyc/ny09.jpg',
             'nyc/ny10.jpg', 'nyc/ny11.jpg', 'nyc/ny12.jpg',
             'nyc/ny13.jpg', 'nyc/ny14.JPG', 'nyc/ny15.JPG',
             'nyc/ny16.jpg'];

 const tokyo = ['tokyo/tokyo01.JPG', 'tokyo/tokyo02.jpg', 'tokyo/tokyo03.JPG',
                'tokyo/tokyo04.jpg', 'tokyo/tokyo05.jpg', 'tokyo/tokyo06.JPG',
                'tokyo/tokyo07.jpg', 'tokyo/tokyo08.JPG', 'tokyo/tokyo09.JPG',
                'tokyo/tokyo10.jpg', 'tokyo/tokyo11.jpg', 'tokyo/tokyo12.jpg',
                'tokyo/tokyo13.jpg', 'tokyo/tokyo14.jpg','tokyo/tokyo15.JPG',
                'tokyo/tokyo16.JPG'];

const paris = ['paris/paris01.JPG', 'paris/paris02.JPG', 'paris/paris03.JPG',
               'paris/paris04.jpg', 'paris/paris05.JPG', 'paris/paris06.jpg',
               'paris/paris07.jpg', 'paris/paris08.JPG', 'paris/paris09.JPG',
               'paris/paris10.jpg', 'paris/paris11.jpg', 'paris/paris12.jpg',
               'paris/paris13.jpg', 'paris/paris14.jpg', 'paris/paris15.jpg',
               'paris/paris16.jpg'];


const togglePhotos = (ev) => {
  document.querySelector('.intro').style.display ="none";
  document.querySelector('.cards').style.display ="flex";
  // const cityID = ev.currentTarget.id;
  // const city = cities[cityID];
  // const description = document.querySelector('.description');
  // const cards = document.querySelector('.cards');
  // description.innerHTML += `
  //               <h3>${city.description}</h3>
  //           `;
  //           for (const item of city.image) {
  //             let myCard = `
  //             <div class="card" style="background-image:url('${item}')"></div>
  //             `;
  //             cards.innerHTML += myCard;
  //             }
  //             initCarousel();
  //           };

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
      <div class="photocard">
      <img src= ${imageURL}/> 
      <p>telakjsdlkfjslkdf</p> 
      </div>
    `;
    document.querySelector('.cards').innerHTML += myCard;
  }
  initCarousel();
};

// <div class="card" style="background-image:url('${imageURL}')"></div>


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

/* photo gallery functions*/

const showComments = (ev) => {
  document.querySelector('.comments').style.display ="block";
  document.querySelector('.intro').style.display ="none";
  document.querySelector('.cards').style.display ="none";
}

// const attachClickEvents = () => {
//     const button = document.querySelector('#buttons');
//     const links = button.querySelectorAll('a');
//     for (const link of links) {
//         link.onclick = togglePhotos; // this is what modifies the template
//     }
// };


// We are fetching data from two local files and storing them to
// local variables that we can later access.
// fetch('cities.json')
//     .then(response => response.json())
//     .then(data => {
//         cities = data; // setting global variable
//     })
//     //also, we are attaching click events to each link:
//     .then(attachClickEvents)
//     .then(() => {
//         document.querySelector('#buttons a').click();
//           });
//
// document.querySelector('#home').onclick = showHome;

document.querySelector('#chicago').onclick = togglePhotos;
document.querySelector('#nyc').onclick = togglePhotos;
document.querySelector('#tokyo').onclick = togglePhotos;
document.querySelector('#paris').onclick = togglePhotos;
