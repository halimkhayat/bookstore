

// bestseller book section
let bookRange = JSON.parse(sessionStorage.getItem('bestseller')) || []

const bookList = document.getElementById('booklist-left')
let bestSeller = () => {
    return bookList.innerHTML = bookData.map((i) => {
        let {id, img, author, title, Price} = i
        return `
        <div class="bestseller-sec" id="${id}">
            <div class="book-image">
                <img class="img-style" src="${img}" alt="" class="" style="width: 100px; height: auto;">
            </div>
            <div class="section-details">
                <div class="author-flex">
                    <div class="author">${title}</div>
                </div>
                <div class="book-details">
                    <div class="booktitle">${author}</div>
                    <div class="price">RM ${Price}</div>
                    <a href="bookinfo.html">
                        <span onclick="bookInfoBtn(${id})" class="btn btn-sm btn-outline-info mt-2">Learn More...</span>
                    </a>
                </div>
            </div>
        </div>
        `
    }).join("")
}

bestSeller()

let bookInfoBtn = (id) => {
    let selectedBook = id;
    let search = bookRange.find((x) => x.id == selectedBook)
    if(search == undefined){
        bookRange.push({
            id: selectedBook,
            item: 1
        })
    }

    sessionStorage.setItem('bestseller', JSON.stringify(bookRange))
}

// discount book display
const discSection = document.getElementById('discount-section')
// for(let i of bookDiscount){
//     let discContainer = document.createElement('div')
//     discContainer.classList.add('discount-flex')
//     discContainer.classList.add()

//     let discBox = document.createElement('div');
//     discBox.classList.add('discount-box')

//     let bookGrid = document.createElement('div')
//     bookGrid.classList.add('book-discount')

//     discContainer.appendChild(discBox);

//     let img = document.createElement('img')
//     img.classList.add('discount-img')
//     img.setAttribute('src', i.img)

//     bookGrid.appendChild(img)
//     discBox.appendChild(bookGrid)

//     let bookDescription = document.createElement('div')
//     bookDescription.classList.add('description')

//     bookGrid.appendChild(bookDescription)

//     let bookTitle = document.createElement('h5');
//     bookTitle.innerText = i.title

//     let discPrice = document.createElement('div')
//     discPrice.classList.add('price-discount')
//     discPrice.innerText = i.Price

//     let addBtn = document.createElement('div')
//     addBtn.classList.add('btn')
//     addBtn.classList.add('btn-sm')
//     addBtn.classList.add('btn-outline-info')
//     addBtn.classList.add('mt-2')
//     addBtn.innerText = 'Learn More...'

//     bookDescription.appendChild(bookTitle)
//     bookDescription.appendChild(discPrice)
//     bookDescription.appendChild(addBtn)

//     discSection.appendChild(discContainer)

// }

let bookDiscountList = JSON.parse(sessionStorage.getItem("discount")) || []
let discountList = () => {
    return discSection.innerHTML = bookDiscount.map((i) => {
        let {img, id, Price, title} = i
        return `<div class="discount-flex" id="${id}">
                    <div class="discount-box">
                        <div class="book-discount">
                            <div>
                                <img src="${img}" alt="" class="discount-img" style="height:140px; width:auto;">
                            </div>
                            <div class="description">
                                <h5>${title}</h5>
                                <div class="price-discount">
                                    <div>RM ${Price}</div>
                                </div> 
                                <a href="bookdiscount.html">
                                    <span onclick="bookDiscBtn(${id})" class="btn btn-sm btn-outline-info mt-2">Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
    }).join("")

}

discountList()

let bookDiscBtn = (id) => {
    let selectedBook = id;
    let search = bookDiscountList.find((x) => x.id == selectedBook)
    if(search == undefined){
        bookDiscountList.push({
            id: selectedBook,
            item: 1
        })
    }

    sessionStorage.setItem('discount', JSON.stringify(bookDiscountList))
}