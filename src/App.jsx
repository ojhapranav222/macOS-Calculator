import { useState, useEffect } from "react";
import Button from "./components/Button";
import Confetti from "react-confetti-explosion";
import "./App.css";
import { Textfit } from "react-textfit";

function App() {
  const [data, setData] = useState("");
  const [memory, setMemory] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSecond, setIsSecond] = useState(false); // Toggle for secondary functions
  const [inDegrees, setInDegrees] = useState(true); // Toggle between radians and degrees
  const [theme, setTheme] = useState("light"); // Theme state
  const [history, setHistory] = useState([]); // History state

  useEffect(() => {
    const regex = /\b3\b.*\b4\b|\b4\b.*\b3\b/;
    if (regex.test(data)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [data]);

  function handleButton(e) {
    setData(data.concat(e.target.value));
  }

  function calculation() {
    try {
      const result = eval(data).toString();
      setHistory([...history, `${data} = ${result}`]); // Add to history
      setData(result);
    } catch (error) {
      setData("Error");
    }
  }

  function percentage() {
    const result = (parseFloat(data) / 100).toString();
    setData(result);
  }

  function clear_all() {
    setData("");
  }

  function change_sign() {
    const result = (parseFloat(data) * -1).toString();
    setData(result);
  }

  function memoryClear() {
    setMemory(0);
  }

  function memoryAdd() {
    setMemory(memory + parseFloat(data));
    setData("");
  }

  function memorySubtract() {
    setMemory(memory - parseFloat(data));
    setData("");
  }

  function memoryRecall() {
    setData(memory.toString());
  }

  function toggleSecond() {
    setIsSecond(!isSecond);
  }

  function toggleRadDeg() {
    setInDegrees(!inDegrees);
  }

  function square() {
    const result = Math.pow(parseFloat(data), 2).toString();
    setData(result);
  }

  function cube() {
    const result = Math.pow(parseFloat(data), 3).toString();
    setData(result);
  }

  function powerY() {
    const [base, exponent] = data.split("^");
    const result = Math.pow(parseFloat(base), parseFloat(exponent)).toString();
    setData(result);
  }

  function exp() {
    const result = Math.exp(parseFloat(data)).toString();
    setData(result);
  }

  function tenPower() {
    const result = Math.pow(10, parseFloat(data)).toString();
    setData(result);
  }

  function reciprocal() {
    const result = (1 / parseFloat(data)).toString();
    setData(result);
  }

  function sqrt() {
    const result = Math.sqrt(parseFloat(data)).toString();
    setData(result);
  }

  function cbrt() {
    const result = Math.cbrt(parseFloat(data)).toString();
    setData(result);
  }

  function yRootX() {
    const [y, x] = data.split("√");
    const result = Math.pow(parseFloat(x), 1 / parseFloat(y)).toString();
    setData(result);
  }

  function ln() {
    const result = Math.log(parseFloat(data)).toString();
    setData(result);
  }

  function logTen() {
    const result = Math.log10(parseFloat(data)).toString();
    setData(result);
  }

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

  function sin() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.sin(angle * (Math.PI / 180)) : Math.sin(angle);
    setData(result.toString());
  }

  function cos() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.cos(angle * (Math.PI / 180)) : Math.cos(angle);
    setData(result.toString());
  }

  function tan() {
    const angle = parseFloat(data);
    const result = inDegrees ? Math.tan(angle * (Math.PI / 180)) : Math.tan(angle);
    setData(result.toString());
  }

  function sinh() {
    const result = Math.sinh(parseFloat(data)).toString();
    setData(result);
  }

  function cosh() {
    const result = Math.cosh(parseFloat(data)).toString();
    setData(result);
  }

  function tanh() {
    const result = Math.tanh(parseFloat(data)).toString();
    setData(result);
  }

  function insertE() {
    setData(data.concat(Math.E.toString()));
  }

  function insertPi() {
    setData(data.concat(Math.PI.toString()));
  }

  function generateRandom() {
    const result = Math.random().toString();
    setData(result);
  }

  function scientificNotation() {
    setData(data.concat("e"));
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`flex flex-wrap gap-10  justify-center    ${theme}  gap-1 p-5  scrollbar-hide h-screen ${theme==='dark'?'bg-black':'bg-white'} overflow-hidden`}>
    <div>
      <Textfit className={`text-7xl h-20  qs:w-[100vw] md:w-[870px] text-right    p-2 border  rounded-md ${theme==='light'?' bg-white text-black border-black':' bg-black text-white  '}`}>{data?data:'0'}</Textfit>
      {showConfetti && <Confetti />}
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
      />
      </div>
      <div className="  flex flex-col justify-start items-center w-[300px]   border overflow-x-auto  ">
        <h2 className={`${theme==='dark'?'text-white':'text-black'} text-3xl p-5`}>History</h2>
        <ul className=" list-none p-0 ">
          {history.map((item, index) => (
            <li className="  bg-slate-800 text-white mb-4 p-2 rounded" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
