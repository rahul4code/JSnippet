class Shape {
  draw() {
    // Abstract method
    throw new Error("Method 'draw()' must be implemented.");
  }
}

// Liskov Substitution Principle as well
// LSP: Subclasses (Circle, Square) can replace the superclass (Shape) without affecting the correctness of the program.
// They adhere to the contract defined by the superclass, ensuring no unexpected behavior occurs.
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

function drawShape(shape) {
  shape.draw();
}

// Usage
const shapes = [new Circle(), new Square()];
shapes.forEach(drawShape);

// Output:
// Drawing Circle
// Drawing Square
