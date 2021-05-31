function calc(first, second, operation) {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return first / second;
  }
}

let first ='';
let second = '';
let operation = '';

while (first == '' || second == '' || operation == '')
  {
    first = prompt('Введіть перше число', first);
    second = prompt('Введіть друге число', second);
    operation = prompt('Введіть знак', operation);
  }

alert(calc(first, second, operation));