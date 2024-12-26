interface Drawable {
  draw(): void;
}
class Circles implements Drawable {
  draw(): void {
    console.log("drawing a circle");
  }
}
const circles = new Circles();
circles.draw();
