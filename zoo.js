setTimeout(welcome,11000)
function welcome() {
    let wel = document.querySelector(".welcome");
    wel.innerHTML = `<audio controls autoplay>
    <source src="/audio/kids_woah.mp3.mp3" type="audio/mpeg">
    <source src="/audio/kids_woah.ogg.ogg" type="audio/ogg">
    <source src="/audio/kids_woah.wav.wav" type="audio/wav">
</audio> `
}

setTimeout(animal,15000)
function animal() {
    let ani = document.querySelector(".welcome");
    ani.innerHTML= ` <audio controls autoplay>
    <source src="/audio/song animals .mp3.mp3" style="audio/mpeg">
    <source src="/audio/song animals .ogg.ogg" style="audio/ogg">
    <source src="/audio/song animals .wav.wav" style="audio/wav">
</audio> `
}