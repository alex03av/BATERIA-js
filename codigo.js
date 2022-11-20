let display = document.querySelector("#display");
let switchBoton = document.getElementById("tono");
let tecla = document.querySelectorAll(".drum-pad");
let botonEncender = document.getElementById("encender");
let altavoces = document.getElementById("volumen");
let entrada = true;

botonEncender.addEventListener(
  "click",
  (comprobar = () => {
    if (botonEncender.checked) {
      display.innerHTML = "";
      return (entrada = false);
    } else {
      display.innerHTML = "ENCENDIDO";
      return (entrada = true);
    }
  })
);

switchBoton.addEventListener(
  "click",
  (obtener = (letras) => {
    if (comprobar() == true) {
      if (switchBoton.checked) {
        display.innerHTML = "Bateria";
        switch (letras) {
          case "Q":
            sonidos("BateriaSonido/papa.mp3", "Tambores");
            break;
          case "W":
            sonidos("BateriaSonido/platillos.mp3", "Platillos");
            break;
          case "E":
            sonidos("BateriaSonido/palillos1.mp3", "Palillos");
            break;
          case "A":
            sonidos("BateriaSonido/plato.mp3", "Bonbos");
            break;
          case "S":
            sonidos("BateriaSonido/tambores_5.mp3", "Tambor");
            break;
          case "D":
            sonidos("BateriaSonido/analogica_6.mp3", "TocToc");
            break;
          case "Z":
            sonidos("BateriaSonido/tambores_8.mp3", "Tambor Box");
            break;
          case "X":
            sonidos("BateriaSonido/bateria.mp3", "Tambor Bajo");
            break;
          case "C":
            sonidos("BateriaSonido/pampam.mp3", "BOX");
            break;
        }
      } else {
        display.innerHTML = "Bajos";
        switch (letras) {
          case "Q":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
              "Bass Drum"
            );
            break;
          case "W":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
              "Beat Box"
            );
            break;
          case "E":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
              "Guitar"
            );
            break;
          case "A":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
              "Bit"
            );
            break;
          case "S":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
              "Hard Bass"
            );
            break;
          case "D":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
              "PITIDOD"
            );
            break;
          case "Z":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
              "PIM"
            );
            break;
          case "X":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
              "BASS UNDER"
            );
            break;
          case "C":
            sonidos(
              "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
              "POM"
            );
            break;
        }
      }
      return;
    }
  })
);

//CAPTURAMOS LOS DATOS POR MAUSE BOTON

tecla.forEach((boton) => {
  boton.addEventListener("click", () => {
    const minuscula = boton.innerHTML;
    const teclaClick = minuscula.toUpperCase();
    obtener(teclaClick);
  });
}); //

//CAPTURAMOS LAS TECLAS______________________
document.addEventListener("keypress", presionarTecla);
function presionarTecla(event) {
  teclaPull = event.key.toUpperCase(); //convertimos en mayusculas

  if (validacion(teclaPull) == true) {
    //validamos que sean las teclas
    obtener(teclaPull);

    let btn = document.getElementById(teclaPull);
    btn.classList.add("active");
    let verdad = btn.classList.contains("active");

    if (verdad == true) {
      document.addEventListener("keyup", () => {
        btn.classList.remove("active");
      });
    }
  }
} //_____________________________________________

validacion = (val) => {
  const validar = /^\Q|[W]|\Z|\E|\A|[D]|\X|\C|[S]$/g;
  let control = validar.test(val);
  return control;
};

let volumen = 0.5;
altavoces.addEventListener("click", () => {
  volumen = altavoces.value / 100;
  let volumenDisplay = parseInt(volumen * 100);
  display.innerHTML = `Vol ${volumenDisplay}`;
});

sonidos = (sonido, visual) => {
  const audio = new Audio(sonido);

  if (audio.paused) {
    audio.play();

    audio.currentTime = 0;
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
  display.innerHTML = visual;
  audio.volume = volumen;
};
