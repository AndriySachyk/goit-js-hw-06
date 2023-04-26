const refs = {
    input: document.getElementById("font-size-control"),
    span: document.getElementById("text")
};


refs.span.style.fontSize = refs.input.value + 'px';


refs.input.addEventListener('input', (even) => {
    const fontSize = even.currentTarget.value
    refs.span.style.fontSize = `${fontSize}px`
})


