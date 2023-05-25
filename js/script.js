
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let integer = parseInt(document.getElementById('integer').value);
  let Minimum = parseInt(document.getElementById('Minimum').value);
  let Maximnum = parseInt(document.getElementById('Maximnum').value);
  let string = "";
  let number = integer;
  function multiplicationtable() {
    for (let counting = Minimum; counting <= Maximnum; counting++) {
      number = integer*counting;
      string = string + `${integer} x ${counting} = ${number} <br>`;
    }
    return string
  }
  resultDiv.innerHTML = `${multiplicationtable()}`
});
