const bookData = [
    {
        id: "1",
        title: "Harry Potter and the Philospher's Stone ",
        author: 'JK Rowling',
        Price: '70.00',
        img: './images/book_11.jpeg'
    },
    {
        id: "2",
        title: "Shoe Dog ",
        author: 'Phil Knight',
        Price: '35.00',
        img: './images/book_1.jpeg'
    },
    {
        id: "3",
        title: "After Steve ",
        author: 'tripp Mickle',
        Price: '55.00',
        img: './images/book_3.jpeg'
    },
    {
        id: "4",
        title: "The Psychology of Money",
        author: 'Morgan Housel',
        Price: '44.00',
        img: './images/book_6.jpeg'
    },
    {
        id: "5",
        title: "Ikigai",
        author: 'hector Garcia',
        Price: '23.50',
        img: './images/book_24.jpeg'
    },
    {
        id: "6",
        title: "Atomic Habits ",
        author: 'james Clear',
        Price: '22.00',
        img: './images/book_25.jpeg'
    },
    {
        id: "7",
        title: "Call Upon Him",
        author: 'Mizi Wahid',
        Price: '50.00',
        img: './images/book_22.jpeg'
    },
    {
        id: "8",
        title: "Will you Stay?",
        author: 'Norhafsah Hamid',
        Price: '35.00',
        img: './images/book_23.jpeg'
    },
    {
        id: "9",
        title: "Surrounded by Idiots",
        author: 'Thomas Erikson',
        Price: '55.00',
        img: './images/book_18.jpeg'
    },
    {
        id: "10",
        title: "When The Stars Come Out",
        author: 'Nicola Edwards',
        Price: '46.90',
        img: './images/book_30.webp'
    }
]

console.log(bookData)

// bestseller section
const bookList = document.getElementById('booklist-left')
for(let i of bookData){
    let mainContainer = document.createElement('div');
    mainContainer.classList.add('bestseller-sec');

    let imgDiv = document.createElement('div');
    imgDiv.classList.add('book-image')

    let image = document.createElement('img');
    image.setAttribute('src', i.img)
    image.classList.add('img-style')

    imgDiv.appendChild(image)
    

    let bookDetails = document.createElement('div')
    bookDetails.classList.add('section-details')

    let author = document.createElement('div')
    author.classList.add('author-flex')

    let authorName = document.createElement('div')
    authorName.classList.add('author')
    authorName.innerText = i.title

    let book = document.createElement('div')
    book.classList.add('book-details')

    let bookTitle = document.createElement('div')
    bookTitle.classList.add('booktitle')
    bookTitle.innerText = i.author

    let price = document.createElement('div');
    price.classList.add('price')
    price.innerText = i.Price

    let addToCart = document.createElement('span')
    addToCart.classList.add('btn')
    addToCart.classList.add('btn-sm')
    addToCart.classList.add('btn-outline-info')
    addToCart.classList.add('mt-2')
    addToCart.innerText = 'Add To Cart'

    
    author.appendChild(authorName)
    book.appendChild(bookTitle)
    book.appendChild(price)
    book.appendChild(addToCart)

    bookDetails.appendChild(author)
    bookDetails.appendChild(book)

    mainContainer.appendChild(imgDiv)
    mainContainer.appendChild(bookDetails)

    bookList.appendChild(mainContainer)

}



// discount section
const discountBook = [
    {
        id: "11",
        title: "The Singapore and Malacca Straits",
        author: 'Peter Boshberg',
        Price: 'RM 66.90',
        img: './images/book_9.jpeg'
    },
    {
        id: "12",
        title: "The Towns of Malaya",
        author: 'Peter Boshberg',
        Price: 'RM 25.0',
        img: './images/book_10.jpeg'
    },
    {
        id: "13",
        title: "Elon Musk: Risking it All",
        author: 'Michael Vlismas',
        Price: '66.90',
        img: './images/book_2.jpeg'
    },
    {
        id: "14",
        title: "Conversations with Tunku Abdul Rahman",
        author: 'Tan Sri Abdullah Ahmad',
        Price: '30.70',
        img: './images/book_7.jpeg'
    },
    {
        id: "15",
        title: "The Art of Letting God",
        author: 'Mizi Wahid',
        Price: '35.20',
        img: './images/book_20.jpeg'
    },
    {
        id: "15",
        title: "Essential Grammar in Use",
        author: 'raymond Murphy',
        Price: '15.00',
        img: './images/book_15.jpeg'
    },
]

const discSection = document.getElementById('discount-section')
for(let i of discountBook){
    let discContainer = document.createElement('div')
    discContainer.classList.add('discount-flex')
    discContainer.classList.add()

    let discBox = document.createElement('div');
    discBox.classList.add('discount-box')

    let bookGrid = document.createElement('div')
    bookGrid.classList.add('book-discount')

    discContainer.appendChild(discBox);

    let img = document.createElement('img')
    img.classList.add('discount-img')
    img.setAttribute('src', i.img)

    bookGrid.appendChild(img)
    discBox.appendChild(bookGrid)

    let bookDescription = document.createElement('div')
    bookDescription.classList.add('description')

    bookGrid.appendChild(bookDescription)

    let bookTitle = document.createElement('h5');
    bookTitle.innerText = i.title

    let discPrice = document.createElement('div')
    discPrice.classList.add('price-discount')
    discPrice.innerText = i.Price

    let addBtn = document.createElement('div')
    addBtn.classList.add('btn')
    addBtn.classList.add('btn-sm')
    addBtn.classList.add('btn-outline-info')
    addBtn.classList.add('mt-2')
    addBtn.innerText = 'Add To Cart'

    bookDescription.appendChild(bookTitle)
    bookDescription.appendChild(discPrice)
    bookDescription.appendChild(addBtn)

    discSection.appendChild(discContainer)

}