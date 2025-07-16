const rangeValue = document.querySelector(".slider .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

let priceGap = 500;


const priceInputValue = document.querySelectorAll(".price-input input");

for(let i = 0; i<priceInputValue.length; i++){
    priceInputValue[i].addEventListener("input", e =>{
        let minp = parseInt(priceInputValue[0].value);
        let maxp = parseInt(priceInputValue[1].value);
        let diff = maxp - minp
        
    })
}