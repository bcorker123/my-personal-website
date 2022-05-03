const pics = document.querySelectorAll('.cat-pics');

const catPics = () => alert('Cute cat!')

// let count = 0;

//i think i can change this to a forEach bc pics is an array-like object
// for (let n = 0; n < pics.length; n++) {
//     pics[n].addEventListener('click', catPics);
// };

//i changed it to a forEach
//pics.forEach(element => element.addEventListener('click', catPics))




// adds solid border to each pic element (looks weird bc it encloses padding too)
// pics.forEach(element => element.style.border = 'solid')

//could use querySelector to replace the selected cat pic with one with
//a crown on it or replace it with a pic online of shrek or some shit
const replacePic = (e) => {
    const originalImg = e.target.src;
    e.target.src='./images/shrek-fierce.jpg';
    setTimeout(() => e.target.src=originalImg, 200)
}

pics.forEach(element => element.addEventListener('click', replacePic))