import React from 'react';
 // Assuming the CSS is saved in Button.css

const Button = ({
  handleButton,
  calculation,
  percentage,
  change_sign,
  clear_all,
  memoryClear,
  memoryAdd,
  memorySubtract,
  memoryRecall,
  toggleSecond,
  isSecond,
  square,
  cube,
  powerY,
  exp,
  tenPower,
  reciprocal,
  sqrt,
  cbrt,
  yRootX,
  ln,
  logTen,
  factorial,
  sin,
  cos,
  tan,
  sinh,
  cosh,
  tanh,
  insertE,
  insertPi,
  generateRandom,
  scientificNotation,
  toggleRadDeg,
  toggleTheme,
  theme,
}) => {

   // List of all buttons to be rendered
  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '/',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×',
    '¹/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=', 'Theme'
  ];

  return (
    <div className= {`grid  grid-cols-10 md:grid-cols-10 h-[50vh]   w-[100%] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] btn ${theme === "dark" ? "dark" : "light" }`}> 
      {buttons.map((btn, index) => (
        <button
          className={`border siblings border-black ${theme === 'dark' ? 'bg-dark_grey text-white' : 'bg_white text-white '} ${ 
            index === 16 || index === 17 || index === 18 || index === 26 || index === 27 || index === 28 || index === 36 || index === 37 || index === 38 || index === 46 || index === 47 ? 'bg-light' : ''
          } ${index === 9 || index === 19 || index === 29 || index === 39 || index === 48 ? 'bg-yellow' : ''} ${
            index === 46 ? 'col-span-2' : ''
          } ${index === 49 ? 'col-span-10' : ''} hover:bg-gray-400  `}
          key={index}
          value={btn}
          
          onClick={(e) => {
            if (btn === 'C') clear_all();
            else if (btn === '+/-') change_sign();
            else if (btn === '%') percentage();
            else if (btn === '=') calculation();
            else if (btn === 'mc') memoryClear();
            else if (btn === 'm+') memoryAdd();
            else if (btn === 'm-') memorySubtract();
            else if (btn === 'mr') memoryRecall();
            else if (btn === '2nd') toggleSecond();
            else if (btn === 'x²') square();
            else if (btn === 'x³') cube();
            else if (btn === 'xʸ') powerY();
            else if (btn === 'eˣ') exp();
            else if (btn === '10ˣ') tenPower();
            else if (btn === '¹/x') reciprocal();
            else if (btn === '²√x') sqrt();
            else if (btn === '³√x') cbrt();
            else if (btn === 'ʸ√x') yRootX();
            else if (btn === 'ln') ln();
            else if (btn === 'log₁₀') logTen();
            else if (btn === 'x!') factorial();
            else if (btn === 'sin') sin();
            else if (btn === 'cos') cos();
            else if (btn === 'tan') tan();
            else if (btn === 'e') insertE();
            else if (btn === 'EE') scientificNotation();
            else if (btn === 'Rad') toggleRadDeg();
            else if (btn === 'sinh') sinh();
            else if (btn === 'cosh') cosh();
            else if (btn === 'tanh') tanh();
            else if (btn === 'π') insertPi();
            else if (btn === 'Rand') generateRandom();
            else if (btn === 'Theme') toggleTheme();
            else handleButton(e);
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Button;
