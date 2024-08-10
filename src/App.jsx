import { useState } from 'react';
import './App.css';

function App() {
  let [randomNumb, setNumb] = useState(0);

  let generateDigit = () => {
    return Math.floor(Math.random() * 10);
  };

  let generateRandom = () => {
    let hundreds = generateDigit();
    let tens = generateDigit();
    let units = generateDigit();

    let numb = hundreds * 100 + tens * 10 + units;
    setNumb(numb);
  };

  let checkSum = (numb) => {
    let sum = 0;
    while (numb > 0) {
      let lastdigit = numb % 10;
      sum += lastdigit;
      numb = Math.floor(numb / 10); // Use Math.floor to remove the last digit
    }
    return sum === 15;
  };

  return (
    <>
      <h1>Lottery</h1>
      <h3>Lottery Ticket = {randomNumb}</h3>
      {randomNumb > 0 && (checkSum(randomNumb) ? (
        <h2 className='green'>Congratulations! You Won.... since sum is 15</h2>
      ) : (
        <h2>Try Again!</h2>
      ))}
      <button onClick={generateRandom}>Generate Ticket</button>
      
    </>
  );
}

export default App;
