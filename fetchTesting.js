document.addEventListener('DOMContentLoaded', init)
function init(){
    fetch('http://localhost:3000/pets').then(res=>res.json()).then(pets=>{
    console.log(pets)
    for(const pet in pets){
        console.log(pet)
    }



    })
}