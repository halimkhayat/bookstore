let div = document.getElementById('book-info-main')

let bookDiscountList = JSON.parse(sessionStorage.getItem('discount')) || []

let discountList = () => {
    if(bookDiscountList.length !== 0 && bookDiscountList.length == 1) {
        return div.innerHTML = bookDiscountList.map((i) =>{ 
        let {id, item} = i
        let search = bookDiscount.find((x) => x.id == id) || []
        console.log(bookDiscountList)
        return `
            <div class=container-book>
                <div class="img-info">
                    <img class="img-info"src="${search.img}">
                </div>
                <div class="description-book"> 
                    <h2>${search.title}</h2>
                    <p>${search.description}</p>
                    <div class=""button-container>
                        <a href="categories.html">
                            <button class="to-categories">Shop Now</button>
                        </a>
                        <a href="index.html">
                            <button class="to-home">Back Home...</button>
                        </a>
                    </div>
                </div>
            </div>
        `
        }).join("")
    }else{
        div.innerHTML = ``
        bookDiscountList.shift()
        console.log(bookDiscountList)
        div.innerHTML = bookDiscountList.map((i) =>{ 
        let {id, item} = i
        let search = bookDiscount.find((x) => x.id == id) || []
        console.log(bookDiscountList)
        return `
            <div class=container-book>
                <div class="img-info">
                    <img class="img-info"src="${search.img}">
                </div>
                <div class="description-book"> 
                    <h2>${search.title}</h2>
                    <p>${search.description}</p>
                    <div class="button-container">
                        <a href="categories.html">
                            <button class="to-categories">Shop Now</button>
                        </a>
                        <a href="index.html">
                            <button class="to-home">Back Home...</button>
                        </a>
                    </div>
                </div>
            </div>
        `
        }).join("")
    }
    sessionStorage.setItem('discount', JSON.stringify(bookDiscountList))
}

discountList()