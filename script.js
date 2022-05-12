document.addEventListener('DOMContentLoaded', init)
function init(){

    fetch('http://localhost:3000/pets').then(res=>res.json()).then(pets=>{
        // console.log(pets)
        for(const pet in pets){
            // console.log(pet)
        }
    })

    // function to temporarily replace clicked pic with a pic of shrek
    let count = 0
    const replacePic = (e) => {
        const originalImg = e.target.src;
        e.target.src='./images/shrek-fierce.jpg';
        count++
        document.querySelector('#shrek').textContent = `You have been shrek'd ${count} times!`
        setTimeout(() => e.target.src=originalImg, 200)
    }
    const pics = document.querySelectorAll('.cat-pics');
    pics.forEach(element => element.addEventListener('click', replacePic))
    
    // 'mouseenter' & 'mouseleave' events
    pics.forEach(pic => pic.addEventListener('mouseenter', e => e.target.style.opacity = 0.7))
    pics.forEach(pic => pic.addEventListener('mouseleave', e => e.target.style.opacity = 1))

    // user adding comments
    const form = document.querySelector('#form');
    const comments = document.querySelector('#comment-section');

    const addComment = (event) => {
        event.preventDefault();
        const div = document.createElement('div');
        div.textContent = `One user says: "${event.target[0].value}"`;
        comments.appendChild(div)
        event.target[0].value = ''
    }
    form.addEventListener('submit', addComment);

    // adds solid border to each pic element (looks weird bc it encloses padding too)
    // pics.forEach(element => element.style.border = 'solid')

}