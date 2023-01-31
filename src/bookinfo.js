let div = document.getElementById('book-info-main')

let bookRange = JSON.parse(sessionStorage.getItem('bestseller')) || []

let bookInfo = () => {
    if(bookRange.length !== 0 && bookRange.length == 1) {
        return div.innerHTML = bookRange.map((i) =>{ 
        let {id, item} = i
        let search = bookData.find((x) => x.id == id) || []
        console.log(bookRange)
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
        bookRange.shift()
        console.log(bookRange)
        div.innerHTML = bookRange.map((i) =>{ 
        let {id, item} = i
        let search = bookData.find((x) => x.id == id) || []
        console.log(bookRange)
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
    sessionStorage.setItem('bestseller', JSON.stringify(bookRange))
}

bookInfo()


