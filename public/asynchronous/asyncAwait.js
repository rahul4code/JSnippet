const a = async () => {
  console.log("Hello");
};
console.log(a()); //Promise

// Place order using async await
let arr = [2, 5, 4, 3];

const createOrder = async (items) => {
  try {
    const totalPrice = items.reduce((acc, curr) => (acc += curr), 0);
    // Calling createOrderAPI
    const orderId = (await Math.floor(Math.random() * 10)) + 1;
    return { orderId, totalPrice };
  } catch (error) {
    throw error;
  }
};

async function orderConfirmation(data) {
  try {
    const { totalPrice } = data;
    const msg = await updateWallet(totalPrice);
    return msg;
  } catch (error) {
    throw error;
  }
}

function updateWallet(totalPrice) {
  return `You have paid ${totalPrice} from your wallet`;
}

createOrder(arr)
  .then((data) => {
    console.log(`Order Placed. Order Id : ${data.orderId}`);
    return data;
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then((data) => {
    return orderConfirmation(data);
  })
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error.message));
