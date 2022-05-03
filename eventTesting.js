//Messing around with events

// 'mouseenter' & 'mouseleave' events
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')

    // figuring out proper event usage on just 1 pic
    // const mittensLeft = document.querySelector('#mittens-left')

    // mittensLeft.addEventListener('mouseenter', e => {
    //     e.target.style.opacity = 0.8
    // })

    // mittensLeft.addEventListener('mouseleave', e => {
    //     e.target.style.opacity = 1
    // })
    
    // applying events to all pics
    const petPics = document.querySelectorAll('.cat-pics')
    petPics.forEach(pic => pic.addEventListener('mouseenter', e => e.target.style.opacity = 0.7))
    petPics.forEach(pic => pic.addEventListener('mouseleave', e => e.target.style.opacity = 1))

    //console.log(petPics)









})

