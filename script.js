document.addEventListener('DOMContentLoaded', init)
function init(){

const pics = document.querySelectorAll('.cat-pics');
const catPics = () => alert('Cute cat!')

// function to temporarily replace clicked pic with a pic of shrek
let count = 0
const replacePic = (e) => {
    const originalImg = e.target.src;
    e.target.src='./images/shrek-fierce.jpg';
    count++
    document.querySelector('#shrek').textContent = `You have been shrek'd ${count} times!`
    setTimeout(() => e.target.src=originalImg, 200)
}

// putting function on each pic element
pics.forEach(element => element.addEventListener('click', replacePic))



// adds solid border to each pic element (looks weird bc it encloses padding too)
// pics.forEach(element => element.style.border = 'solid')

}