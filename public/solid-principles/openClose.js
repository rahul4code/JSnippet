// Not following Open-Close

// class PaymentProcessor {
//   processPayment(paymentMethod) {
//     if (paymentMethod === "creditCard") {
//       console.log("Processing credit card payment");
//     } else if (paymentMethod === "paypal") {
//       console.log("Processing PayPal payment");
//     }
//   }
// }

// const paymentProcessor = new PaymentProcessor();
// paymentProcessor.processPayment("creditCard");
// paymentProcessor.processPayment("paypal");

// Abstract base class
class Shape {
  draw() {
    // Abstract method
    throw new Error("Method 'draw()' must be implemented.");
  }
}

// Subclass Circle
class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing Square");
  }
}

class Triangle extends Shape {
  draw() {
    console.log("Drawing Triangle");
  }
}

// Drawing class that uses polymorphism to draw shapes
class Drawing {
  drawShapes(shapes) {
    shapes.forEach((shape) => {
      shape.draw(); // Polymorphic call
    });
  }
}

const shapes = [new Circle(), new Square(), new Triangle()];
const drawing = new Drawing();
drawing.drawShapes(shapes);
