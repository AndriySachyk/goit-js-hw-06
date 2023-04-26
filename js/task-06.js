const inputText = document.getElementById('validation-input');
const dataLenght = inputText.getAttribute('data-length');


inputText.addEventListener('blur', () => {
    if (inputText.value.trim().length === Number(dataLenght)) {
        inputText.classList.add('valid')
        inputText.classList.remove('invalid')

    } else {
        inputText.classList.add('invalid')
        inputText.classList.remove('valid')
    }
})
