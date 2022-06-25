const secretKode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const pressed = []

window.addEventListener('keyup', e => {

    pressed.push(e.key);
    pressed.splice(-secretKode.length - 1, pressed.length - secretKode.length );

    if(secretKode.join() === pressed.join()) {
        console.log("Wahey, you've unlocked a bonus video: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
});
