let counterValue = 0; 


const spanValue = document.getElementById('value');


const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');

// console.log(spanValue)
// console.log(btnDecrement)
// console.log(btnIncrement)

btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
})

btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
})
