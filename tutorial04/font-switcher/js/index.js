const makeBigger = () => {
   document.querySelector('.content').style.fontSize = '3.4em';
   document.querySelector('.content').style.background = 'hotpink';
   document.querySelector('.content').innerHTML = 'Hello!';
};

const makeSmaller = () => {
   document.querySelector('.content').style.fontSize = '1.4em';
   document.querySelector('.content').style.background = 'white';
   document.querySelector('.content').innerHTML = 'Goodbye!';
};

/*
    1. what element do I want to modify (select)?
    2. what property or attribute do I want to change?
    3. What do I want to change it to?
*/

document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
