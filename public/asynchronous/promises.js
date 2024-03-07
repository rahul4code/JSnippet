// Create promise
const itemsPrice = [2, 4, 6, 8];

const createOrder = (data) => {
  return new Promise((resolve, reject) => {
    let orderId = Math.floor(Math.random() * 10) + 1;
    if (!orderId) {
      reject("Something went wrong");
    }
    let totalPrice = data.reduce((acc, curr) => (acc += curr), 0);
    setTimeout(() => {
      resolve({ totalPrice, orderId });
    }, 2000);
  });
};

createOrder(itemsPrice)
  .then((data) => {
    console.log("Order created successfully");
    return data;
  })
  .catch((err) => console.log(err.message))
  .then((data) => orderConfirmation(data))
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.message));

const orderConfirmation = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error("Order not placed"));
    }
    resolve(
      `You order is placed orderId: ${data?.orderId} and you have paid ${data.totalPrice}`
    );
  });
};

// In case of multiple promises

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  reject("This is intentionally rejected");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 4 is resolved");
  }, 2000);
});

const handleMultipleCalls = () => {
  try {
    const resuts = Promise.allSettled([promise2, promise3, promise4]);
    return resuts;
  } catch (err) {
    throw err;
  }
};

handleMultipleCalls()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
