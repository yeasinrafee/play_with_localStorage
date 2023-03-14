const addProduct = () =>{
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    displayProduct(product, quantity);
    storeToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) =>{
    const listContainer = document.getElementById('product-container');
    const listItem = document.createElement('li');
    listItem.innerText = `${product}: ${quantity}`;
    listContainer.appendChild(listItem);
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const storeToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStrigified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStrigified);
}

const displayProductFromLocalStorage = ()=>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product,quantity);
        displayProduct(product, quantity);
    }
}
displayProductFromLocalStorage();