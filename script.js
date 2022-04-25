console.log('poop');
const pics = document.getElementsByClassName('cat-pics');

function catPics() {
    alert('Cute cat!');
};

let count = 0;

for (let n = 0; n < pics.length; n++) {
    pics[n].addEventListener('click', catPics);
};