// Importing necessary dependencies from React and other packages
import React, { useState, useEffect } from "react";
import Button from "./components/Button"; // Custom Button component
import Confetti from "./components/Confetti"; // Confetti effect for celebrations
import "./App.css"; // Importing CSS for styling
import { Textfit } from "react-textfit"; // Text fitting component for dynamic font size
import ConfettiExplosion from "react-confetti-explosion";

function App() {
  // State for the current input data of the calculator
  const [data, setData] = useState("");
  // State for the memory storage of the calculator
  const [memory, setMemory] = useState(0);
  // State to control the display of confetti animation
  const [showConfetti, setShowConfetti] = useState(false);
  // State to toggle secondary functions
  const [isSecond, setIsSecond] = useState(false);
  // State to toggle between degrees and radians
  const [inDegrees, setInDegrees] = useState(true);
  // State to toggle between light and dark themes
  const [theme, setTheme] = useState("light");
  // State to store the history of calculations
  const [history, setHistory] = useState([]);

  // Effect to update the document class for theme changes
  useEffect(() => {
    document.documentElement.className = theme;
    document.body.style.backgroundColor=`${theme==='dark'?'#1a202c':'#f7fafc'}`
  }, [theme]);

  // Function to handle button clicks and update data
  function handleButton(e) {
    setData(data.concat(e.target.value));
  }

  // Function to evaluate the expression and update data and history
  function calculation() {
    try {
      const result = eval(data).toString();
      setHistory([...history, `${data} = ${result}`]);
      setData(result);
      // Effect to show confetti when the data contains both 5 and 6
      const regex = /\b5\b.*\b6\b|\b6\b.*\b5\b/;
      if (regex.test(data)) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } catch (error) {
      setData("Error");
    }
  }

  // Function to calculate percentage
  function percentage() {
    const result = (parseFloat(data) / 100).toString();
    setData(result);
  }

  // Function to clear all data
  function clear_all() {
    setData("");
  }

  // Function to change the sign of the current data
  function change_sign() {
    const result = (parseFloat(data) * -1).toString();
    setData(result);
  }

  // Function to clear memory
  function memoryClear() {
    setMemory(0);
  }

  // Function to add current data to memory
  function memoryAdd() {
    setMemory(memory + parseFloat(data));
    setData("");
  }

  // Function to subtract current data from memory
  function memorySubtract() {
    setMemory(memory - parseFloat(data));
    setData("");
  }

  // Function to recall memory value
  function memoryRecall() {
    setData(memory.toString());
  }

  // Function to toggle secondary functions
  function toggleSecond() {
    setIsSecond(!isSecond);
  }

  // Function to toggle between radians and degrees
  function toggleRadDeg() {
    setInDegrees(!inDegrees);
  }

  // Function to calculate square
  function square() {
    const result = Math.pow(parseFloat(data), 2).toString();
    setData(result);
  }

  // Function to calculate cube
  function cube() {
    const result = Math.pow(parseFloat(data), 3).toString();
    setData(result);
  }

  // Function to calculate power of y
  function powerY() {
    const [base, exponent] = data.split("^");
    const result = Math.pow(parseFloat(base), parseFloat(exponent)).toString();
    setData(result);
  }

  // Function to calculate exponent
  function exp() {
    const result = Math.exp(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate power of 10
  function tenPower() {
    const result = Math.pow(10, parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate reciprocal
  function reciprocal() {
    const result = (1 / parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate square root
  function sqrt() {
    const result = Math.sqrt(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate cube root
  function cbrt() {
    const result = Math.cbrt(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate y root of x
  function yRootX() {
    const [y, x] = data.split("√");
    const result = Math.pow(parseFloat(x), 1 / parseFloat(y)).toString();
    setData(result);
  }

  // Function to calculate natural logarithm
  function ln() {
    const result = Math.log(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate base-10 logarithm
  function logTen() {
    const result = Math.log10(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate factorial
  function factorial() {
    const n = parseInt(data);
    if (n === 0 || n === 1) {
      setData("1");
      return;
    }
    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }
    setData(result.toString());
  }

  // Function to calculate sine
  function sin() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.sin(angle * (Math.PI / 180)) : Math.sin(angle);
    setData(result.toString());
  }

  // Function to calculate cosine
  function cos() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.cos(angle * (Math.PI / 180)) : Math.cos(angle);
    setData(result.toString());
  }

  // Function to calculate tangent
  function tan() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.tan(angle * (Math.PI / 180)) : Math.tan(angle);
    setData(result.toString());
  }

  // Function to calculate hyperbolic sine
  function sinh() {
    const result = Math.sinh(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate hyperbolic cosine
  function cosh() {
    const result = Math.cosh(parseFloat(data)).toString();
    setData(result);
  }

  // Function to calculate hyperbolic tangent
  function tanh() {
    const result = Math.tanh(parseFloat(data)).toString();
    setData(result);
  }

  // Function to insert the value of Euler's number
  function insertE() {
    setData(data.concat(Math.E.toString()));
  }

  // Function to insert the value of Pi
  function insertPi() {
    setData(data.concat(Math.PI.toString()));
  }

  // Function to generate a random number
  function generateRandom() {
    const result = Math.random().toString();
    setData(result);
  }

  // Function to insert scientific notation
  function scientificNotation() {
    setData(data.concat("e"));
  }

  // Function to toggle the theme between light and dark
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  //Handling Confetti
  function handleConfetti(){

  }

  return (
    <div className={`container ${theme}`}>
      {showConfetti && <ConfettiExplosion
          onComplete={() => setShowConfetti(false)}
          particleCount={400}
          particleSize={18}
          zIndex={2}
          force={1}
          duration={3000}
          className="confetti"
        />}
      <div className="calculator">
        <Textfit className={`textDisplay ${theme==='dark'? 'dark':'light'}`}>{data ? data : '0'}</Textfit>
        <Button
          handleButton={handleButton}
          calculation={calculation}
          percentage={percentage}
          change_sign={change_sign}
          clear_all={clear_all}
          memoryClear={memoryClear}
          memoryAdd={memoryAdd}
          memorySubtract={memorySubtract}
          memoryRecall={memoryRecall}
          toggleSecond={toggleSecond}
          isSecond={isSecond}
          square={square}
          cube={cube}
          powerY={powerY}
          exp={exp}
          tenPower={tenPower}
          reciprocal={reciprocal}
          sqrt={sqrt}
          cbrt={cbrt}
          yRootX={yRootX}
          ln={ln}
          logTen={logTen}
          factorial={factorial}
          sin={sin}
          cos={cos}
          tan={tan}
          sinh={sinh}
          cosh={cosh}
          tanh={tanh}
          insertE={insertE}
          insertPi={insertPi}
          generateRandom={generateRandom}
          scientificNotation={scientificNotation}
          toggleRadDeg={toggleRadDeg}
          toggleTheme={toggleTheme}
          theme={theme}
          className = {`btn ${theme==='dark'? 'dark':'light'}`}
        />
      </div>
      <div className="history">
        <h2 className={`${theme==="light"?'dark':' light'}`}>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index} className={`${theme === "dark" ? "dark" : "light"}`}> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
