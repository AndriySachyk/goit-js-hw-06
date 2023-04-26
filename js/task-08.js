const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = form.elements;

    if (email.value === "" || password.value.trim() === "") {
        return alert("Всі поля повинні бути заповненні");
    }

    const formDate = {
        emali: email,
        pasword: password,
    }

    console.log(formDate)
    form.reset();
}