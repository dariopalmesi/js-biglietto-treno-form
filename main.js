// prima fase: preparazione
let price;
let age;
let km;

const formEl = document.querySelector('#form')
console.log(formEl);

formEl.addEventListener('submit',function (e){
    e.preventDefault()
    const specificSizeInputName = e.target.specificSizeInputName.value
    console.log(specificSizeInputName);
    
    
})
// seconda face: raccolta dati
const priceNumber = 0.21
console.log(priceNumber);

// const ageNumber = Number(window.prompt("Età"));
// console.log(ageNumber);

// const kmNumber = Number(window.prompt("Kilometri"));
// console.log(kmNumber);

// terza fase: elaborazione dati
if (ageNumber > 18 && ageNumber < 65) {
    let price = priceNumber * kmNumber;
    console.log(price.toFixed(2));
} else if (ageNumber < 18) {
    let price = (priceNumber * kmNumber) * 20 / 100;
    console.log(price.toFixed(2));   
} else if (ageNumber > 65) {
    let price = (priceNumber * kmNumber) * 40 / 100
    console.log(price.toFixed(2));
    
}


