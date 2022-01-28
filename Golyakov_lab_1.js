// Голяков Михаил ПКС-220, 28 февраля 2022
// Лабараторная 1, задание C1

const a = -5;
const b = 5;
const h = 0.1;
let x = a;
let results = [];
let dots = []
for(x; x < b; x = x + h) {
  let arg = x;
  let firstStep = `${x}e^(${x})`;
  let secondStep = Math.sin(x);
  let thirdStep = 2 * secondStep;
  let fourthStep = Math.pow(x, 3);
  let fifthStep = Math.pow(x, 2);
  let sixthStep = fourthStep - fifthStep;
  let seventhStep = Math.abs(sixthStep);
  let eigthsStep = Math.sqrt(seventhStep);
  let ninthStep = thirdStep - eigthsStep;
  let tenthStep = ninthStep.toFixed(4)
  let result = firstStep + ` + ${tenthStep}`;
  let dot = [arg, tenthStep];
  dots.push(dot);
  console.log(`При аргументе ${arg} функция равна ${result}`);
  results.push(tenthStep)
}



// Посколько значение перменной e не определено, в задании C1 будем рассматривать результат как значение десятого действия (2sin(x) - sqrt(|x^(3) - x^(2)|))
let minimum;
let first = true;
let count_of_minimum = 0;
for (let i = 0; i < results.lenghts; i++) {
  let arg = results[i];
  if (first) {
    minimum = arg;
    count_of_minimum = 1;
    first = false;
  } else {
    if (arg < minimum) {
      minimum = arg;
      count_of_minimum = 1;
    } else if (arg == minimum) {
      count_of_minimum++;
    } 
  }
}

console.log(`Минималное значение ${minimum}, повторяется ${count_of_minimum} раз(а)`);  

