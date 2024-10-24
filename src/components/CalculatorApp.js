import React, { useState } from 'react'

const CalculatorApp = () => {
    const [ input, setInput ] = useState('');
    const [ result, setResult ] = useState('');

    const handleClick = (value) => {
        setInput ( input + value );
    }
    const handleCalculate = () => {
        try {
            setResult (eval(input).toString());
        } catch(error) {
            setResult('Error')
        }
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };
  return (

    <div className="calculator">
        <div className="display">
            <input type="text" value={input} readOnly/>
            <div className="result">{result}</div>
        </div>
        <table className="calculator-table">
            <tbody>
                <tr>
                   <td><button onClick={() => handleClick('1')}>1</button></td>
                   <td><button onClick={() => handleClick('2')}>2</button></td>
                   <td><button onClick={() => handleClick('3')}>3</button></td>
                   <td><button onClick={() => handleClick('+')}>+</button></td>
                </tr>
                <tr>
                  <td><button onClick={() => handleClick('4')}>4</button></td>
                  <td><button onClick={() => handleClick('5')}>5</button></td>
                  <td><button onClick={() => handleClick('6')}>6</button></td>
                  <td><button onClick={() => handleClick('-')}>-</button></td>
                </tr>
                <tr>
                  <td><button onClick={() => handleClick('7')}>7</button></td>
                  <td><button onClick={() => handleClick('8')}>8</button></td>
                  <td><button onClick={() => handleClick('9')}>9</button></td>
                  <td><button onClick={() => handleClick('*')}>*</button></td>
                </tr>
                <tr>
                  <td><button onClick={handleClear}>C</button></td>
                  <td><button onClick={() => handleClick('0')}>0</button></td>
                  <td><button onClick={handleCalculate}>=</button></td>
                  <td><button onClick={() => handleClick('/')}>/</button></td>
                </tr>
                <tr>
                   <td colSpan="4">
                      <button style={{ width: '100%' }} onClick={() => handleClick('%')}>%</button>
                   </td>
                </tr>

            </tbody>
        </table>
    </div>
  );
}


export default CalculatorApp;
