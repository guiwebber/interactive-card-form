let numeroInput = document.getElementById("cardNumber");
let nomeInput = document.getElementById("cardHolder");
let dateM = document.getElementById("dateM");
let dateY = document.getElementById("dateY");
let cvc = document.getElementById("cvc");
// input
let numeroH1 = document.querySelector(".numero");
let nameP = document.querySelector(".name");
let ano = document.querySelector(".ano");
let mes = document.querySelector(".mes");
let cvcBackcard = document.querySelector(".cvc-backcard");
//texts
let confirmar = document.getElementById("confirm");
let continuar = document.getElementById("continue");
//buttons
let invalid = document.querySelector(".invalid");
//invalid
let cvcAnterior = "";
let valorAnterior = "";
let nomeAnterior = "";
let dataAnterior = "";
let anoAnterior = "";
// variaveis
let infoCard = document.getElementById("infoCard");
let thanks = document.getElementById("thanks");
// cards

let erroCvc = document.getElementById("erroCvc");

thanks.classList.add("oculto");

confirmar.addEventListener("mousedown", () => {
  if ( cvcBackcard === "" || cvc.length || cvcBackcard < 3) {
    erroCvc.textContent = "can't be blank";
    return
  } else {
    thanks.classList.remove("oculto");
    infoCard.classList.add("oculto");
  }
});

continuar.addEventListener("mousedown", () => {
  if (infoCard.classList.contains("oculto")) {
    infoCard.classList.remove("oculto");
    thanks.classList.add("oculto");
  } else {
    return;
  }

  nameP.innerHTML = "Jane Applesed";
  nomeInput.value = "";
  numeroInput.value = "";
  dateY.value = "";
  dateM.value = "";
  cvc.value = "";
  cvcBackcard.innerHTML = "000";
  numeroH1.innerHTML = "0000 0000 0000 0000";
  ano.innerHTML = "00";
  mes.innerHTML = "00";
});

cvc.addEventListener("input", () => {
  let cod = cvc.value.padEnd(3, "0");
  if (cod.length > 3) {
    cod = cod.substring(0, 3);
  }
  if (cod === cvcAnterior) {
    return;
  }

  cvcBackcard.textContent = cod.trim();
  cvcAnterior = cod;
});

dateM.addEventListener("input", () => {
  let month = dateM.value.padEnd(2);
  if (month.length > 2) {
    month = month.substring(0, 2);
  }
  if (month === dataAnterior) {
    return;
  }

  mes.textContent = month.trim();
  dataAnterior = month;
});

dateY.addEventListener("input", () => {
  let year = dateY.value.padEnd(2);
  if (year.length > 2) {
    year = year.substring(0, 2);
  }
  if (year === anoAnterior) {
    return;
  }

  ano.textContent = year.trim();
  anoAnterior = year;
});

nomeInput.addEventListener("input", () => {
  let nome = nomeInput.value.padEnd(30, " ");
  if (nome.length > 30) {
    nome = nome.substring(0, 30);
  }
  if (nome === nomeAnterior) {
    return; // Impede a entrada de caracteres repetidos
  }
  let nomeLimit = nomeInput.value;
  let valorLimitado = nomeLimit.slice(0, 25);
  nomeInput.value = valorLimitado;

  nameP.textContent = nome.trim();
  nomeAnterior = nome;
});

numeroInput.addEventListener("input", function (e) {
  let valor = numeroInput.value.padEnd(16, "0");
  if (valor.length > 16) {
    valor = valor.substring(0, 16);
  }
  if (valor === valorAnterior) {
    return; // Impede a entrada de caracteres repetidos
  }
  valor = valor.replace(/(.{4})/g, "$1 ");
  numeroH1.textContent = valor.trim();
  valorAnterior = valor;
  numeroInput.addEventListener("keydown", function (e) {
    if (!/^\d$/.test(e.key) && !["Enter", "Tab", "Backspace"].includes(e.key)) {
      e.preventDefault();
    }
  });
});
