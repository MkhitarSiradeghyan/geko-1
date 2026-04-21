const change = document.getElementById("change")
const generate = document.getElementById("generate")
const input = document.getElementById("input")

// const symbols = "0123456789abcdef"
change.addEventListener("click", () => {
    document.body.style.background = input.value
})

generate.addEventListener("click", () => {
    const hex = "#" + Math.floor(Math.random() * 16 ** 6).toString(16).toLowerCase()
    input.value = hex
    document.body.style.background = hex

})