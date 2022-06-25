const secretKode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const pressed = []

window.addEventListener('keyup', e => {

    pressed.push(e.key);
    pressed.splice(-secretKode.length - 1, pressed.length - secretKode.length );

    console.log(pressed);
    if(secretKode.join() === pressed.join()) {
        console.log('Wahey');
    }
});
