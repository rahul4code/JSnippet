// Callback
const cartPrice = [2, 4, 8, 10];

function createOrder(cart, notifyUser, updateWallet) {
  let orderId;
  const price = cart.reduce((acc, curr) => (acc += curr), 0);
  setTimeout(() => {
    orderId = Math.floor(Math.random() * 10) + 1;
    notifyUser(orderId, price, updateWallet);
  }, 2000);
  return orderId;
}

function confirmOrder(orderId, totalPrice, updateWallet) {
  console.log(
    `Your order is successfully placed ${orderId}. Pay ${totalPrice}`
  );
  setTimeout(() => {
    updateWallet(totalPrice);
  }, 2000);
}

function updateWallet(price) {
  console.log(`You have paid ${price} from your wallet`);
}

createOrder(cartPrice, confirmOrder, updateWallet);
