let label = document.getElementById('totalPrice')
let shoppingCart = document.getElementById('cartItem')

let basket = JSON.parse(localStorage.getItem("data")) || []

let totalCart = () => {
  let notification = document.getElementById('cart-box')
  if(basket.length !==  0){
    notification.innerHTML = `
    <i class="bi bi-cart2"></i>
    <div class="cart-amount" id="cartAmount"></div>`
    let cartIcon = document.getElementById('cartAmount')
    cartIcon.innerHTML = basket.map((i) => i.item).reduce((x, y)=> x + y, 0)
  } 
}

totalCart()

let generateCartList = () => {
    if(basket.length !== 0){
        return shoppingCart.innerHTML = basket.map((i) =>{
            let {id, item} = i;
            let search = bookDatabase.find((x) => x.id == id) || []
            return `
            <div class="cart-item">
                <img src="${search.img}" style="height:auto; width: 120px">
                <div class="item-info">
                    <h5>${search.title}</h5>
                    <div>RM ${search.Price}</div>
                    <div class="quantity-box">
                        <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                        <div class="quantity" id="${id}">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                    </div>
                     <i onclick="removeCart(${id})" id="${id}" class="bi bi-x-square"></i>
                </div>
            </div>`
        }).join("");
    }else{
        shoppingCart.innerHTML = ``
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="categories.html">
                <button class="backBtn">Go Shop</button>
            </a>
        `
    }
}

generateCartList()

let increment = (id) => {
    let selectedItem = id;
    let theItem = basket.find((i) => i.id === selectedItem)
    if(!theItem) {
        basket.push({
            id: selectedItem,
            item: 1
        })
    } else {
        theItem.item += 1
    }
    generateCartList()
    update(selectedItem)
    localStorage.setItem("data", JSON.stringify(basket))
}

let decrement = (id) => {
    let selectedItem = id;
    let theItem = basket.find((i) => i.id === selectedItem)
    if(!theItem) 
        return
    else if(theItem.item === 0)
        return
    else {
        theItem.item -= 1
    }
   
    update(selectedItem)
    basket = basket.filter((i) => i.item !== 0)
    generateCartList()
    localStorage.setItem("data", JSON.stringify(basket))
}


let update = (id) => {
 let theItem = basket.find((i) => i.id === id)
 document.getElementById(id).innerHTML = theItem.item
 totalCart()
 totalAmount()
}

let removeCart = (id) => {
    let theItem = id
    basket = basket.filter((i) => i.id !== theItem )
    generateCartList()
    totalCart()
    totalAmount()
    localStorage.setItem("data", JSON.stringify(basket))
}

let clearAll = () => {
    basket = []
    generateCartList()
    totalCart()
    localStorage.setItem("data", JSON.stringify(basket))
}

let totalAmount = () => {
    if(basket.length !== 0){
        let amount = basket.map((i)=> {
            let {id, item} = i
            let theItem = bookDatabase.find((i) => i.id == id) || [];
            return item * theItem.Price
            
        }).reduce((x,y) => x + y, 0)
        label.innerHTML = `
        <h2>Total Price: RM ${amount} </h2>
        <div class="cart-main-btn">
            <button onclick="clearAll()" class="remove-all">Remove All</button>
            <button onclick="checkoutBtn()" class="checkout">Checkout</button>
        </div> `
    }
    else{}
}

let checkoutBtn = () => {
    alert("do you want to check out?")
}

totalAmount()