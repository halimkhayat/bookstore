let item = document.getElementById('shop');
console.log(item)

let basket = JSON.parse(localStorage.getItem("data")) || []

// display book in a each box
let generateItem = () => {
  return (item.innerHTML = bookDatabase.map((i) => {
    let {id, title, author, Price, img, category} = i
    return ` 
    <div id="book-id-${id}" class="box ${category}">
      <div class="filter-display">
        <img class="book-images" src=${img}>
      </div>
      <div class="item-details">
          <div class="book-name">${title}</div>
          <div class="book-author">${author}</div>
          <div>RM ${Price}</div>
      </div>
      <div class="filter-display">
        <span onclick="addBtn(${id})" class="btn btn-sm btn-outline-info mt-2">Add to cart</span>
      </div>
  </div>`
  }).join(""))
  
}

generateItem()

// add book in the cart
let addBtn = (id) => {
  let selectedItem = id
  console.log(selectedItem)
  let search = basket.find((x) => x.id === selectedItem)
  if(!search){
    basket.push({
      id: selectedItem,
      item: 1
    })
  } else {
    alert('item already in the cart')
    // search.item += 1
  }
  // console.log(basket)
  totalCart()
  localStorage.setItem("data", JSON.stringify(basket))
}

// cart update to total when add up
let totalCart = () => {
  let notification = document.getElementById('cart-box')
  if(basket.length !==  0){
    notification.innerHTML = `
    <i class="bi bi-cart2"></i>
    <div class="cart-amount" id="cartAmount">0</div>`
    let cartIcon = document.getElementById('cartAmount')
    cartIcon.innerHTML = basket.map((i) => i.item).reduce((x, y)=> x + y, 0)
  }
  
}


totalCart()

// filter book by category
const btn = document.querySelectorAll('.nav-link')
console.log(btn)
const product = document.querySelectorAll('.box')
console.log(product)

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', (e) => {
    e.preventDefault()

    const filter = e.target.dataset.filter
    console.log(filter)

    product.forEach((x) => {
      if(filter === 'all'){
        x.style.display = 'block'
      } else {
        if(x.classList.contains(filter)){
          x.style.display = 'block'
        } else {
          x.style.display = 'none'
        }
      }
    })
  })
}

// let btnContainer = document.getElementById('navbarSideRight')
// let activeBtn = document.getElementsByClassName('nav-link')

// for(let i = 0; i < activeBtn.length; i++){
//   activeBtn[i].addEventListener('click' , function(){
//     let active = document.getElementsByClassName('active')
//     active[0].className = active[0].className.replace("active", " ");
//     this.className += "active";
//   })
// }





