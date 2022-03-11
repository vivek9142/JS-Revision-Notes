// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  
  
  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
  
  //Bonus:
  // accept refunds.
  // Track user history.

function addToCart(item){
    const itemAlreadyinCart = (user.cart.reduce((total,el)=>el.id === item.id ? ++total : 0,0))>0;
    if(itemAlreadyinCart){
        let filterItem = user.cart.filter(el => el.id === item.id);
        filterItem[0].qty++;
        let updatedCart = user.cart.map(el => el.id ===item.id ? filterItem[0] : el);
        user.cart = updatedCart;
    } else user.cart.push(item);
}
function totalPrice(){
    return user.cart.reduce((total,item)=>total+item.price*item.qty,0);
}

function addTax(item){
    const totalPriceBeforeTax = totalPrice();
    return Number((totalPriceBeforeTax*3/100).toFixed(1))
}



function buyItem(){

}

function purchaseItem(){  
    let tax =addTax();
    let totalCartPrice = totalPrice();
    let totalFinalPrice = tax + totalCartPrice;
    let time = new Date();
    time = time.toDateString();
    let finalBill = {Items:[...user.cart],time,totalCartPrice,tax,totalFinalPrice}; 
    user.purchases.push(finalBill);
    user.cart.length = 0;
}

function Amazon(){
    addToCart({id:11,name:'Adidas Sneakers',price:45.45,qty:1});
    addToCart({id:11,name:'Adidas Sneakers',price:45.45,qty:1});
    addToCart({id:15,name:'Here & Now Denim Jacket',price:131.8,qty:1});

    purchaseItem();
    console.log(user);
}


Amazon();

