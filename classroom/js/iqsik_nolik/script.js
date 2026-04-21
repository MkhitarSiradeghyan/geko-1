const board = document.getElementById("board")
const btn = document.getElementById("btn")
const status = document.getElementById("status")
const cells = document.querySelectorAll(".cell")

let player = false
let game = true
let state = new Array(9).fill(null)

const comboner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]
btn.addEventListener("click", () => {
    game = true
    cells.forEach(cell => {
        cell.innerHTML = ""
    })
    state = new Array(9).fill(null)
    player = false
})
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if(!game || cell.innerHTML){
            return
        }
        const div = document.createElement("div")
        div.className = player ? "o" : "x"
        cell.appendChild(div)
        state[index] = player
        if(checkWin(player)){
            status.textContent = `${player ? "Nolik@" : "Iqsik@"} haxtec. Apri inq@`
            game = false
        }else if(!state.includes(null)){
            status.textContent = `Nichya`
            game = false
        }
        player = !player
    })
})

function checkWin(xaxacox){
    return comboner.some(combo => (
        combo.every(pos => (
            state[pos] === xaxacox
        ))
    ))
}