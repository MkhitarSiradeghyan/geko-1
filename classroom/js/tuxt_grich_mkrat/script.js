const comp = Math.floor(Math.random() * 3)

const user = +prompt("Enter item")

if (
    comp === 0 && user === 2 ||
    comp === 1 && user === 0 ||
    comp === 2 && user === 1
) {
    alert("Ayooooo menq kriq")
} else if (
    user === 0 && comp === 2 ||
    user === 1 && comp === 0 ||
    user === 2 && comp === 1
){
    alert("Voooooch duq krinq")
}else{
    alert("Nichyaaaa")
}