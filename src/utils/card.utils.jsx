export function getPriceList(cartItems) {
  return cartItems.map((drink) => drink.price * drink.quantity);
}
