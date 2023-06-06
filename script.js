function gerar() {

  //

  var nome1 = document.getElementById("nome1").value
  var nome_texto = document.getElementById("nome-text1")
  nome_texto.textContent = nome1

  var nome2 = document.getElementById("nome2").value
  var nome_texto = document.getElementById("nome-text2")
  nome_texto.textContent = nome2

  var nome3 = document.getElementById("nome3").value
  var nome_texto = document.getElementById("nome-text3")
  nome_texto.textContent = nome3



  for (let i = 1; i < 4; i++) {

   
    var RandomNumber;
    var numbers = [];
    do {
      RandomNumber = Math.floor(Math.random() * 100);
      if (numbers.indexOf(RandomNumber) == -1) {
        numbers.push(RandomNumber);
      }
    } while (numbers.length !== 25);
    console.log(numbers);


    const texto = document.getElementsByClassName("CT" + i);
    for (let i = 0; i < texto.length; i++) {
      texto[i].textContent = numbers[i];
    }
  }
}
