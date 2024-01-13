const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const context = canvas.getContext('2d');
const car = new Tesla(100, 100, 30, 50);
car.draw(context);

animate();

// This method will call itself indefinitely
// so it will animate the car movment. It's basically like a main loop
function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(context);
    requestAnimationFrame(animate);
}