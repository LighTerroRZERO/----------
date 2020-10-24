// Введение в JS
alert(`Калькулятор`);

const x = prompt(`Введите значение x`, `0`);
const y = prompt(`Введите значение y`, `0`);
let result = x + y;
document.write(`${result}<hr/>`);

const integerX = parseInt(x);
const integerY = parseInt(y);
result = integerX + integerY;
document.write(result);

// Логические структуры

let counter = prompt('Введите число:');
factorial = 1;
document.write(`<hr/>Факториал числа: ${counter}! = `);

do {
  if (counter == 0) {
    factorial = 1;
    break;
  }
  
  factorial *= counter;
  counter--;
} while(counter > 0);

document.write(factorial);

// цикл Дейкстры

for( ; ; ) {
  a = prompt(`Введите переменную l/r`);

  switch (a) {
    case `l`:
      document.write(`Пойти на лево <br/>`);
      continue;

    case `r`:
      document.write(`Пойти на право <br/>`);
      continue;
  }

  break;
}

// Массивы

// Join
const mounth = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

document.write("<ul> <li>");

const rez = mounth.join("</li><li>");
document.write(rez);

document.write("</li></ul>");

// Concat

let massA = [1, 2, 3];

let input = prompt("Введите новый элемент массива: ", "");

while (input != null) {
  massA = massA.concat(input);
  input = prompt("Введите новый элемент массива: ", "");
}

document.write(massA);
document.write(`реверс массива: ${massA.reverse()}`);

// Slice

const massSlice = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

document.write(`<p> ${massSlice.join(", ")}</p>`);

const from = 5;
const to = 8;

const resultSlice = massSlice.slice(from, to);

document.write(`<p>${resultSlice.join(", ")}</p>`);

// Splice

const massSplice = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

const fromSplice = prompt("Введите индекс месяца с которого начать выборку: ", "");
const countSplice = prompt("Введите количество месяцев: ", "");

const resultSplice = massSplice.splice(fromSplice, countSplice);

document.write(resultSplice);

// функции
// Калькулятор

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const operand1 = +prompt("Введите первое число: ");
const sign = prompt("Введите знак арифметической операции: + - * /");
const operand2 = +prompt("Введите второе число:");
let resultCalc;

switch (sign) {
  case "+":
    resultCalc = add(operand1, operand2);
    break;
  case "-":
    resultCalc = sub(operand1, operand2);
    break;
  case "*":
    resultCalc = mul(operand1, operand2);
    break;
  case "/":
    resultCalc = div(operand1, operand2);
    break;
  default:
    document.write(`<p><b style='color:red'>${sign}</b> - не является знаком арифметической операции!!!</p>`);
}

if (resultCalc != undefined)
  document.write(`<p>${operand1} ${sign} ${operand2} = ${resultCalc}</p>`);

function max(a, b, c) {

  let maxValue = Number.NEGATIVE_INFINITY;
  document.write(`<p>Number.NEGATIVE_INFINITY = ${maxValue}</p> <hr/>`);

  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] > maxValue) {
      maxValue = arguments[i];
    }
  }

  return maxValue;
}

const res = max(-33, 33, 777, -666, -22);

document.write(`<p>Максимальное значение одного из аргументов функции = ${res}</p>`);

const recurs = (counter) => {

  counter--;

  document.write(`<p style='background-color:lightblue;'>Первая половина метода: ${counter}</p>`);

  if (counter != 0)
    recurs(counter);

  document.write(`<p style='background-color:yellow;'>Вторая половина метода: ${counter}</p>`);
};

recurs(3);

// Объекты

