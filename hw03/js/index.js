
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
  activeCard = e.target;
  console.log(activeCard);

  //open the carousel:
  document.querySelector('.preview').className = "preview active";
  //replace the image:
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
};

//attaches click to first card:
//document.querySelector('.card').onclick = showPhoto;

//attaches click to all of the cards:
const cards = document.querySelectorAll('.card');
for (card of cards) {
  card.onclick = showPhoto;
}


// PART 3: Close functionality
const close = () => {
  // console.log('Close me');
  document.querySelector('.preview').className = "preview";
};

document.querySelector('#close').onclick = close;

// PART 4: Next functionality:
const next = () => {
  if (activeCard === cards[15]) {
    activeCard = cards[0];
  } else {
    activeCard = activeCard.nextElementSibling;
  }
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}

document.querySelector('#next').onclick = next;
document.querySelector('.featured_image').onclick = next;

// PART 5: Previous functionality:

const prev = () => {
  if (activeCard === cards[0]) {
    activeCard = cards[15];
  } else {
    activeCard = activeCard.previousElementSibling;
  }
  document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}

document.querySelector('#prev').onclick = prev;
