const state = {
    price: 500,
    balance: 10000,
    count: 0
}

const balance = document.getElementById("balance")
const price = document.getElementById("price")
const buyBtn = document.getElementById("buy")
const sellBtn = document.getElementById("sell")
const count = document.getElementById("count")

function updatePrice(){
    setInterval(() => {
        const old_price = state.price
        const k = Math.random() > 0.5 ? 1 : -1;
        let random = Math.floor(Math.random() * state.price * 0.04)
        random *= k;
        state.price += random;
        console.log(old_price, state.price)
        if(old_price > state.price){
            price.style.color = "#f00"
        }else if(old_price < state.price){
            price.style.color = "#0f0"
            
        }else{
            price.style.color = "#ccc"
            
        }
        render()
    }, 2000)
}

function render(){
    balance.textContent = state.balance
    price.textContent = state.price
    count.textContent = state.count
}

buyBtn.addEventListener("click", () => {
    if(state.balance < state.price){
        alert("Anbavarar mijocner")
    }else{
        state.count++
        state.balance -= state.price
    }
    render()
})
sellBtn.addEventListener("click", () => {
    if(state.count < 1){
        alert("Dollar chuneq el")
    }else{
        state.count--
        state.balance += state.price
    }
    render()
})


updatePrice()
render()