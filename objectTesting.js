const pets = {
    'mittens': {
        name: 'Mittens',
        age: 7,
        description: [
            'A kind, gentle soul, Mittens is the oldest of the 3 cats.',
            'He likes to lay on the couch, look out the side door window, and, of course, get pet!',
            'He has a two-colored nose and the softest belly you\'ve ever seen.'
        ],
        imageSet: {
            mittensCouch: './images/mittens-couch.jpg',
            mittensEyes: './images/mittens-eyes.jpg',
            mittensSleepy: './images/mittens-sleepy.jpg'
        }
    },
    'corn': {
        name: 'Corn',
        age: 6, 
        description: [
            'Corn has a playful and lovable attitude, and is the "middle child" of the 3 cats.',
            'He likes to play and scratch like James, but when he\'s hungry he SCREAMS like he hasn\'t eaten in weeks!',
            'If you haven\'t noticed already, he only has 1 eye! He had to have surgery to have it removed but he\'s so much better now.'
        ],
        imageSet: {
            cornEye: './images/corn-eye.jpg',
            cornLights: './images/corn-lights.jpg',
            cornTongue: './images/corn-tongue.jpg'
        }
    },
    'james': {
        name: 'James',
        age: 4,
        description: [
            'Rambunctious and a cuddlebug, James is the youngest of the 3 cats. ',
            'He has the most energy of the 3 and is always trying to play with something or scratch something.',
            'When he is very sleepy, he gets these adorable little bags under his eyes.'
        ],
        imageSet: {
            jamesChair: './images/james-chair.jpg',
            jamesFace: './images/james-face.jpg',
            jamesGrass: './images/james-grass.jpg',
            jamesSleepy: './images/james-sleepy.jpg'
        }
    },
}
//making sure object can be accessed properly 
//console.log(pets.corn.description[2])

//make a table with cat's info
const table = document.querySelector('table');
const createRow = document.createElement('tr');
for(element in pets){
    const newRow = createRow
    table.append(newRow);
}

//removed while working on eventTesting
//console.log(table);