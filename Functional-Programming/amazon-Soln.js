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

  //let's list the function we need to build
 
//   function addItemToCart(){}
//   function applyTaxtoItems(){}
//   function buyItem(){}
//   function emptyCart(){}

  // I do not want ot do this simple task we need to compose
  // the func for this task+

  const compose = (f,g) => (...args) => f(g(...args));

  purchaseItem(
      emptyCart,
      buyItem,
      applyTaxtoItems,
      addItemToCart
  )(user,{name:'Laptop',price:200});


  function purchaseItem(...fns){
    return  fns.reduce(compose)
  }

  function addItemToCart(user,item){
    amazonHistory.push(user);
    const updateCart = user.cart.concat(item);
    return Object.assign({},user,{cart:updateCart})
  }
  //just to see if the code is working
//   function applyTaxtoItems(user){
//     return user
//   }
//   function buyItem(user){
//       return user
//   }
//   function emptyCart(user){
//       return user
//   }

function applyTaxtoItems(user){
    amazonHistory.push(user);
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name:item.name,
            price:item.price * taxRate
        }
    })

    return Object.assign({},user,{cart:updatedCart});
  }
  function buyItem(user){
    amazonHistory.push(user);
      return Object.assign({},user,{purchases:user.cart});
  }
  function emptyCart(user){
    amazonHistory.push(user);
    return Object.assign({},user,{cart:[]});
  }
  
  let amazonHistory = [];

  function refundItem(){

  }