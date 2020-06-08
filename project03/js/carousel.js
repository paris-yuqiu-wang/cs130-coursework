const featured_image = document.querySelector('.featured_image');
const container = document.querySelector('.preview_box');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const closeButton = document.querySelector('.close');
let activeCard = null;

// functions:
const showPhoto = (e) => {
    activeCard = e.target;
    displayPhoto();
};

const displayPhoto = () => {
    featured_image.style.backgroundImage = activeCard.style.backgroundImage;
    container.classList.add('active');
    document.querySelector('main').style.overflow = 'hidden';
};

const hidePhoto = (e) => {
    container.classList.remove('active');
    document.querySelector('main').style.overflow = 'auto';
};

const showNextPhoto = (e) => {
    const cards = document.querySelectorAll('.card');
    var i;
    for (i=0; i < cards.length; i++) {
        if (activeCard == cards[i]) {
            if (i == cards.length-1) {
                activeCard = cards[0]
                break
            }
            activeCard = cards[i+1]
            break
        }
    }
    displayPhoto();
};

const showPreviousPhoto = (e) => {
    const cards = document.querySelectorAll('.card');
    for (i=0; i < cards.length; i++) {
        if (activeCard == cards[i]) {
            if (i == 0) {
                activeCard = cards[cards.length-1]
                break
            }
            activeCard = cards[i-1]
            break
        }
    }
    displayPhoto();
};

const initCarousel = () => {
    const cards = document.querySelectorAll('.card');
    for (card of cards) {
        card.onclick = showPhoto;
    }
    closeButton.onclick = hidePhoto;
    featured_image.onclick = showNextPhoto;
    nextButton.onclick = showNextPhoto;
    prevButton.onclick = showPreviousPhoto;
};
