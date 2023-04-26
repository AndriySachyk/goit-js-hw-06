let spanName = document.getElementById('name-output')

const inputName = document.getElementById('name-input');

inputName.addEventListener("input", () => { 
    if (inputName.value === "") {
      spanName.textContent = "Anonymous"
    }
    else {
        spanName.textContent = inputName.value
    }
})
