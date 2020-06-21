var squares = document.querySelectorAll('td')

function changeMarker() {
  if(this.textContent == ''){
    this.textContent = 'X'
  }
  else if (this.textContent == 'X') {
    this.textContent = 'O'
  }
  else {
    this.textContent = ''
  }
}
// console.log(squares);
for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', changeMarker);
}
