
(function () {
  // Получаем ссылки на радио-батоны
  const darkRadioButton = document.querySelector('#darkRadio');
  const lightRadioButton = document.querySelector('#lightRadio');
  const violetRadioButton = document.querySelector('#violetRadio');

  // Функция для переключения на темную цветовую схему
  function switchToDarkTheme() {
    document.documentElement.setAttribute('dark', '');
    document.documentElement.removeAttribute('light');
    document.documentElement.removeAttribute('violet');
  }

  // Функция для переключения на светлую цветовую схему
  function switchToLightTheme() {
    document.documentElement.setAttribute('light', '');
    document.documentElement.removeAttribute('dark');
    document.documentElement.removeAttribute('violet');
  }
  // Функция для переключения на фиолетовую цветовую схему
  function switchToVioletTheme() {
    document.documentElement.setAttribute('violet', '');
    document.documentElement.removeAttribute('dark');
    document.documentElement.removeAttribute('light');
  }

  // Слушатели событий для радио-btn
  darkRadioButton.addEventListener('change', switchToDarkTheme);
  lightRadioButton.addEventListener('change', switchToLightTheme);
  violetRadioButton.addEventListener('change', switchToVioletTheme);
}());

(function () {
  var initialState = true;
  const output = document.querySelector('.result-field');
  const keypad = document.querySelector('.calc-keypad');
  const keys = keypad.querySelectorAll('.key');
  var exp = "";

  // Обработчик события нажатия на кнопку калькулятора
  function handleButtonClick(event) {
    const button = event.target;
    const buttonText = button.textContent;
  
    if (buttonText === 'RESET') {
      initialState = true;
      exp = "0";
      output.textContent = exp;
    } else if (buttonText === 'DEL') {
      exp = exp.slice(0, -1);
    } else if (buttonText === '=') {
      try {
        const result = trim12(eval(exp)).toString();
        exp = result; // Обновление exp с результатом вычислений
        output.textContent = exp;
      } catch (error) {
        exp = 'ERROR';
        output.textContent = exp;
        initialState = true;
      }
    } else if (buttonText === 'x') {
        exp += '*';
      } 
    else {
      if (initialState === true) {
        exp = buttonText;
        initialState = false;
      } else {
        exp += buttonText;
      }
    }
    output.textContent = exp; // Обновление output с текущим значением exp
    console.log(exp);
  }

  // Добавляем обработчик события для каждой кнопки
  keys.forEach(function (key) {
    key.addEventListener('click', handleButtonClick);
  });
})();

function trim12(arg) {
  if (arg.toString().length > 14) {
    let num = parseFloat(arg);
    if (!isNaN(num)) {
      ex = num.toPrecision(12);
      if (ex.toString().length > 14) {
        ex = ex.toExponential(9);
      }
      return ex.replace(/(\.\d*?)0+$/, '$1');
    }
  }
  return parseFloat(arg);
}


