const fotoanjing = document.getElementById("anjing");
const soundanjing = document.getElementById("anjing-sound");
const fotoburung = document.getElementById("burung");
const soundburung = document.getElementById("burung-sound");
const fotokucing = document.getElementById("kucing");
const soundkucing = document.getElementById("kucing-sound");
const fotokuda = document.getElementById("kuda");
const soundkuda = document.getElementById("kuda-sound");
const fotomonyet = document.getElementById("monyet");
const soundmonyet = document.getElementById("monyet-sound");

fotoanjing.addEventListener("click", () => {
    console.log("Anjing diklik");
    soundanjing.play();
});

fotoburung.addEventListener("click", () => {
    console.log("Burung diklik");
    soundburung.play();
});

fotokucing.addEventListener("click", () => {
    console.log("Kucing diklik");
    soundkucing.play();
});

fotokuda.addEventListener("click", () => {
    console.log("Kuda diklik");
    soundkuda.play();
});

fotomonyet.addEventListener("click", () => {
    console.log("Monyet diklik");
    soundmonyet.play();
});
