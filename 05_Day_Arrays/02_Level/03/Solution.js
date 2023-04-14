//  3.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(shoppingCart);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);