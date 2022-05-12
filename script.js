document.addEventListener('DOMContentLoaded', init)
function init(){
    
    const renderPets = pet=>{
        console.log(pet.imageSet)
        const petsContainer = document.querySelector('#petsContainer')
        const petDiv = document.createElement('div')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const para = document.createElement('p')
        const images = pet.imageSet
        
        images.forEach(image=>{
            const img = document.createElement('img')
            img.setAttribute('src', image)
            img.className = 'pet-pics'
            petDiv.append(img)
        })
        petDiv.id = `${pet.name}`
        h3.textContent = pet.name
        h4.textContent = `Age: ${pet.age}` 
        para.textContent = pet.description

        petDiv.append(h3, h4, para)
        petsContainer.appendChild(petDiv)
    }

    fetch('http://localhost:3000/pets').then(res=>res.json()).then(pets=>{
        for(const pet in pets){
            renderPets(pets[pet])
        }

        // function to temporarily replace clicked pic with a pic of shrek
        let count = 0
        const replacePic = (e) => {
            const originalImg = e.target.src;
            e.target.src='./images/shrek-fierce.jpg';
            count++
            document.querySelector('#shrek').textContent = `You have been shrek'd ${count} times!`
            setTimeout(() => e.target.src=originalImg, 200)
        }
        const pics = document.querySelectorAll('.pet-pics');
        console.log(pics)
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

    })



}