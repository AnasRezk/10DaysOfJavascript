const txtArea = document.getElementById('res');
let screen = '';

function clear() {
  screen = '';
  txtArea.innerHTML = '';
}

document.getElementById('btnClr').addEventListener('click', clear);

function key(c) {
  screen += c;
  txtArea.innerHTML = screen;
}

function operatorFunx() {
  if (screen.includes("+")) {
    var numbers = screen.split("+");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    const sum = x + y;
    var ans = sum.toString(2);
  } else if (screen.includes("-")) {
    var numbers = screen.split("-");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    const sub = x - y;
    var ans = sub.toString(2);
  } else if (screen.includes("*")) {
    var numbers = screen.split("*");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    const mul = x * y;
    var ans = mul.toString(2);
  } else if (screen.includes("/")) {
    var numbers = screen.split("/");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    const div = x / y;
    var ans = div.toString(2);
  }
  screen = ans;
  document.getElementById("res").innerHTML = screen;
}