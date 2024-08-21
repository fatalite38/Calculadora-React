import Button from './components/Button'
import Input from './components/Inputs'

import { Container, Content, Row, History } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');
  const [history, setHistory] = useState([]);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setResult('0');
    setHistory([]);
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOperation = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation(op);
    } else {
      const result = calculate(firstNumber, currentNumber, operation);
      setResult(result);
      setFirstNumber(result);
      setCurrentNumber('0');
      setOperation(op);
      setHistory([...history, `${firstNumber} ${operation} ${currentNumber} = ${result}`]);
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      const result = calculate(firstNumber, currentNumber, operation);
      setResult(result);
      setFirstNumber('0');
      setCurrentNumber(result);
      setOperation('');
      setHistory([...history, `${firstNumber} ${operation} ${currentNumber} = ${result}`]);
    }
  }

  const handlePercent = () => {
    setCurrentNumber(String(Number(currentNumber) / 100));
  }

  const handleSquareRoot = () => {
    setCurrentNumber(String(Math.sqrt(Number(currentNumber))));
  }

  const handleExponential = () => {
    setCurrentNumber(String(Math.exp(Number(currentNumber))));
  }

  const handleChangeSign = () => {
    setCurrentNumber(String(Number(currentNumber) * -1));
  }

  const calculate = (a, b, op) => {
    switch (op) {
      case '+':
        return String(Number(a) + Number(b));
      case '-':
        return String(Number(a) - Number(b));
      case 'x':
        return String(Number(a) * Number(b));
      case '/':
        return String(Number(a) / Number(b));
      default:
        return '0';
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <History>
          {history.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </History>
        <Row>
          <Button label="e" onClick={handleExponential} />
          <Button label="+/-" onClick={handleChangeSign} />
          <Button label="c" onClick={handleOnClear} style={{ gridColumn: 'span 2'}} />
        </Row>
        <Row>
          <Button label="x" onClick={() => handleOperation('x')}/>
          <Button label="/" onClick={() => handleOperation('/')}/>
          <Button label="%" onClick={handlePercent} />
          <Button label="√" onClick={handleSquareRoot} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperation('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperation('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} style={{ gridColumn: 'span 3' }} />
          <Button label="=" onClick={handleEquals}/>
        </Row> 
      </Content>
    </Container>
  );
}

export default App;