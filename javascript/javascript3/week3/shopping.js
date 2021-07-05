class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        if (currency.toLowerCase().includes('dollar')) {
            return this.price * 0, 16
        } else if (currency.toLowerCase().includes('euro')) {
            return this.price * 0, 13
        } else if (currency.toLowerCase().includes('pound')) {
            return this.price * 0, 12
        } else {
            return this.price
        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(product) {
        const updatedProducts = this.products.filter((it) => product.name !== it.name)
        this.products = updatedProducts
    }

    searchProduct(productName) {
        return this.products.filter(a => a.name === productName)
    }

    getTotal() {
        return this.products.reduce((a, b) => a.price + b.price)
    }

    renderProducts() {
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')
        body.appendChild(h1)
        h1.innerHTML = 'Products'
        this.products.forEach(product => {
            const pro = document.createElement('h2')
            body.appendChild(pro)
            pro.innerHTML = product.name
            const price = document.createElement('p')
            body.appendChild(price)
            price.innerHTML = product.price
        })
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => {
                const user = document.getElementById('user')
                const h3 = document.createElement('h3')
                user.appendChild(h3)
                h3.innerHTML = `Username: ${data.username}`
                const p = document.createElement('p')
                user.appendChild(p)
                p.innerHTML = `Email: ${data.email}`
            }).then(() => this.renderProducts())
            .then(() => {
                const total = document.getElementById('total')
                total.innerHTML = `Total Price: ${this.getTotal()}`
            })
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const flatscreen2 = new Product("flat-screen2", 4000);
const flatscreen3 = new Product("flat-screen3", 3000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(flatscreen2);
shoppingCart.addProduct(flatscreen3);
shoppingCart.removeProduct(flatscreen2)
console.log(shoppingCart)

const userinfo = document.getElementById('userbtn')
userinfo.addEventListener('click', () => {
    shoppingCart.getUser();
    userinfo.disabled = true;
})
