let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function operate(operator) {
  if (display.value === '') {
    alert('Please enter a number first.');
    return;
  }
  if (isNaN(display.value.charAt(display.value.length - 1))) {
    alert('Only numbers are allowed.');
    return;
  }
  appendToDisplay(operator);
}

function calculate() {
  if (display.value === '') {
    alert('Please enter a number first.');
    return;
  }
  if (isNaN(display.value.charAt(display.value.length - 1))) {
    alert('Expression is incomplete.');
    return;
  }
  let result = eval(display.value);
  display.value = result;
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key)) {
    appendToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    operate(key);
  } else if (key === 'Enter') {
    calculate();
  } else {
    alert('Only numbers are allowed.');
  }
});

  