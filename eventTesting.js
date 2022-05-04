//Messing around with events


document.addEventListener('DOMContentLoaded', () => {

    const petPics = document.querySelectorAll('.cat-pics');
    
    
    // 'mouseenter' & 'mouseleave' events
    petPics.forEach(pic => pic.addEventListener('mouseenter', e => e.target.style.opacity = 0.7))
    petPics.forEach(pic => pic.addEventListener('mouseleave', e => e.target.style.opacity = 1))

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
    
    //console.log(comments)








})

