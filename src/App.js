import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles';
import { useState } from 'react';
const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber,setFirstNumber] = useState('0');
  const [operation,setOperation] = useState(''); 
  
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => {
      if ((number === ',' || number === '.') && prev === '0') {
        return `0${number}`;
      }
      return `${prev === '0' ? '' : prev}${number}`;
    });
  };
  
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const result = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(result));
      setOperation('');
    }
  }

  const handleTimesNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');
    }else{
      const result = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(result));
      setOperation('');
    }
  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const result = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(result));
      setOperation('');
    }
  }

  const handlePercentageNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('%');
    }else{
      const result = (Number(firstNumber)/100) * Number(currentNumber)
      setCurrentNumber(String(result));
      setOperation('');
    }
  }

  const handleSquareRoot = () => {
    if(currentNumber!== '0'){
      handleAddNumber('√')
      const result = Math.sqrt(Number(currentNumber))
      setCurrentNumber(String(result));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleTimesNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        case '%':
          handlePercentageNumber();
          break;
        case '=':
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='√' onClick={handleSquareRoot}/>
          <Button label='%' onClick={handlePercentageNumber}/>
          <Button label='C' onClick={handleOnClear}/>
          <Button label='/' onClick={handleDivideNumbers}/>
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='x' onClick={handleTimesNumbers}/>
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='-' onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label=',' onClick={() => handleAddNumber('.')}/>
          <Button label='0' onClick={() => handleAddNumber('0')}/>
          <Button label='.' onClick={() => handleAddNumber(',')}/>
          <Button label='=' onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
