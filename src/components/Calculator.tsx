import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleClick = (label: string) => {
    if (label === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    } else if (label === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + label);
    }
  };

  return (
    <div className="calculator">
      <Display value={result || input} />
      <div className="buttons">
        {['7', '8', '9', '/'].map((label) => (
          <Button key={label} label={label} onClick={() => handleClick(label)} />
        ))}
        {['4', '5', '6', '*'].map((label) => (
          <Button key={label} label={label} onClick={() => handleClick(label)} />
        ))}
        {['1', '2', '3', '-'].map((label) => (
          <Button key={label} label={label} onClick={() => handleClick(label)} />
        ))}
        {['0', '.', '=', '+'].map((label) => (
          <Button key={label} label={label} onClick={() => handleClick(label)} />
        ))}
        <Button label="C" onClick={() => handleClick('C')} />
      </div>
    </div>
  );
};

export default Calculator;
