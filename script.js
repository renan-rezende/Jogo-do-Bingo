var player = [];
var numerosSorteados = [];

function gerarNumerosAleatorios(quantidade, min, max) {
  if (quantidade > (max - min)) {
    console.log("Intervalo insuficiente...");
    return;
  }

  var numeros = [];

  while (numeros.length < quantidade) {
    var aleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    if (!numeros.includes(aleatorio)) {
      numeros.push(aleatorio);
    }
  }

  return numeros;
}

function sortearNumero() {
  if (document.getElementById("vencedor").innerText || numerosSorteados.length === 75) {
    return;
  }

  var numeroSorteado;

  do {
    numeroSorteado = Math.floor(Math.random() * 75 + 1);
  } while (numerosSorteados.includes(numeroSorteado));

  numerosSorteados.push(numeroSorteado);
  verificarCartelas();

  var numerosDiv = document.getElementById("numeros-sorteados");
  var numeroSpan = document.createElement("span");
  numeroSpan.innerText = numeroSorteado + ", ";
  numerosDiv.appendChild(numeroSpan);

  setTimeout(sortearNumero, 100);
}

function verificarCartelas() {
  var cartelas = document.getElementsByClassName("cartela");
  var vencedores = [];

  for (var i = 0; i < cartelas.length; i++) {
    var numeros = cartelas[i].querySelectorAll(".numero");
    var cartelaCompleta = true;

    for (var j = 0; j < numeros.length; j++) {
      var numero = parseInt(numeros[j].innerText);

      if (numerosSorteados.includes(numero)) {
        numeros[j].classList.add("numero-marcado");
      } else {
        cartelaCompleta = false;
        numeros[j].classList.remove("numero-marcado");
      }
    }

    if (cartelaCompleta) {
      vencedores.push(cartelas[i].querySelector(".jogador").innerText);
    }
  }

  if (vencedores.length > 0) {
    mostrarVencedor(vencedores);
  }
  console.log(vencedores)
}

function mostrarVencedor(vencedores) {
  var divVencedor = document.getElementById("vencedor");
  divVencedor.innerText = "Os vencedores são: " + vencedores.join(", ");
}

function gerarCartela() {
  var nomeJogador = prompt("Digite o nome do jogador");

  var cartelaContainer = document.createElement("div");
  cartelaContainer.classList.add("cartela");

  var jogador = document.createElement("h2");
  jogador.classList.add("jogador");
  jogador.innerText = nomeJogador;
  jogador.style.textAlign = "center";

  cartelaContainer.appendChild(jogador);

  var tabela = document.createElement("table");

  var thead = document.createElement("thead");

  var thB = document.createElement("th");
  thB.innerText = "B";
  var thI = document.createElement("th");
  thI.innerText = "I";
  var thN = document.createElement("th");
  thN.innerText = "N";
  var thG = document.createElement("th");
  thG.innerText = "G";
  var thO = document.createElement("th");
  thO.innerText = "O";

  thead.appendChild(thB);
  thead.appendChild(thI);
  thead.appendChild(thN);
  thead.appendChild(thG);
  thead.appendChild(thO);

  var tbody = document.createElement("tbody");



  for (var i = 0; i < 5; i++) {
    var tr = document.createElement("tr");

    for (var j = 0; j < 5; j++) {
      var td = document.createElement("td");
      var numero = document.createElement("span");
      numero.classList.add("numero");

      if (i === 2 && j === 2) {
        td.innerText = "X";
        td.classList.add("numero-central", "numero-marcado"); // Adiciona a classe "numero-marcado" ao "X"
      } else {
        var numerosAleatorios = gerarNumerosAleatorios(1, j * 15 + 1, j * 15 + 15);
        numero.innerText = numerosAleatorios[0];
      }

      td.appendChild(numero);
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }


  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  cartelaContainer.appendChild(tabela);

  var espacoCartelas = document.getElementById("espaco-cartelas");
  espacoCartelas.appendChild(cartelaContainer);
  player.push({
    nomeJogador: nomeJogador,
    cartela: cartelaContainer,
  });
}

function reiniciarJogo() {
  player = [];
  numerosSorteados = [];

  var espacoCartelas = document.getElementById("espaco-cartelas");
  espacoCartelas.innerHTML = "";

  var numerosDiv = document.getElementById("numeros-sorteados");
  numerosDiv.innerHTML = "";

  var divVencedor = document.getElementById("vencedor");
  divVencedor.innerText = "";
}
