function gerar() {
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
