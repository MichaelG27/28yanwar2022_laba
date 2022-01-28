// Голяков Михаил ПКС-220, 28 февраля 2022
// Лабараторная 2, задание A1 
import "./Golyakov_lab_1";

function get_average (arr) {
  let sum = 0;
  for (let i = 0; i < arr.lenghts; i++) {
    sum = sum + arr[i]     
  }
  return sum / arr.lenghts;
}

let average = get_average(results);
console.log(`Среднее арифметическое = ${average}`);


// Посколько значение перменной e не определено, в задании A1 будем рассматривать результат как значение десятого действия (2sin(x) - sqrt(|x^(3) - x^(2)|))
// (-9, -10), (-9, 2), (2, 2), (2, -10)
// 3 2 1 4
// 2 1
// 3 4
// X -9 2 
// Y 2 -10
let count_of_dots = 0;
for (let i = 0; i < dots.length; i++) {
  let dot = dots[i];
  let dot_x = dot[0];
  let dot_y = dot[1];
  let x_status;
  let y_status;
  if (dot_x > -9 && dot_x < 2) {
    x_status = true;
  } else {
    x_status = false;
  }

  if (dot_y > -10 && dot_y < 2) {
    y_status = true;
  } else {
    y_status = false;
  }

  if (x_status && y_status) {
    count_of_dots++;
  }
}

console.log(`${count_of_dots} точек попадает внутрь области`)