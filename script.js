function gerar() {
  //  FUNÇÃO QUE GERA E ARMAZENA OS 25 NUMEROS DIFERENTES DENTRO DO ARRAY 1 "numbers".
  //  FUNÇÃO QUE INSERE OS NUMEROS DENTRO DA TABELA 1 (CARTELA).

  var RandomNumber;
  var numbers1 = [];
  do {
    RandomNumber = Math.floor(Math.random() * 100);
    if (numbers1.indexOf(RandomNumber) == -1) {
      numbers1.push(RandomNumber);
    }
  } while (numbers1.length !== 25);
  console.log(numbers1);

  const texto1 = document.getElementsByClassName("CT1");
  for (let i = 0; i < texto1.length; i++) {
    texto1[i].textContent = numbers1[i];
  }

  //  FUNÇÃO QUE GERA E ARMAZENA OS 25 NUMEROS DIFERENTES DENTRO DO ARRAY 2"numbers".
  //  FUNÇÃO QUE INSERE OS NUMEROS DENTRO DA TABELA 2 (CARTELA).

  var RandomNumber;
  var numbers2 = [];
  do {
    RandomNumber = Math.floor(Math.random() * 100);
    if (numbers2.indexOf(RandomNumber) == -1) {
      numbers2.push(RandomNumber);
    }
  } while (numbers2.length !== 25);
  console.log(numbers2);

  const texto2 = document.getElementsByClassName("CT2");
  for (let i = 0; i < texto2.length; i++) {
    texto2[i].textContent = numbers2[i];
  }

  //  FUNÇÃO QUE GERA E ARMAZENA OS 25 NUMEROS DIFERENTES DENTRO DO ARRAY 3 "numbers".

  //  FUNÇÃO QUE INSERE OS NUMEROS DENTRO DA TABELA 3 (CARTELA).

  var RandomNumber;
  var numbers3 = [];
  do {
    RandomNumber = Math.floor(Math.random() * 100);
    if (numbers3.indexOf(RandomNumber) == -1) {
      numbers3.push(RandomNumber);
    }
  } while (numbers3.length !== 25);
  console.log(numbers3);

  const texto3 = document.getElementsByClassName("CT3");
  for (let i = 0; i < texto3.length; i++) {
    texto3[i].textContent = numbers3[i];
  }
}
