import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [firstOperand, setFirstOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecond, setWaitingForSecond] = useState(false)

  const handleNumber = (num) => {
    if (waitingForSecond) {
      setDisplay(num)
      setWaitingForSecond(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleOperator = (op) => {
    const inputValue = parseFloat(display)

    if (firstOperand === null) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)
      setDisplay(String(result))
      setFirstOperand(result)
    }

    setWaitingForSecond(true)
    setOperator(op)
  }

  const calculate = (first, second, op) => {
    switch (op) {
      case '+': return first + second
      case '-': return first - second
      case '*': return first * second
      case '/': return second !== 0 ? first / second : 'Error'
      default: return second
    }
  }

  const handleEquals = () => {
    if (operator && firstOperand !== null) {
      const inputValue = parseFloat(display)
      const result = calculate(firstOperand, inputValue, operator)
      setDisplay(String(result))
      setFirstOperand(null)
      setOperator(null)
      setWaitingForSecond(false)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  const handleDecimal = () => {
    if (waitingForSecond) {
      setDisplay('0.')
      setWaitingForSecond(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const Button = ({ value, onClick, className = '' }) => (
    <button className={`btn ${className}`} onClick={onClick}>
      {value}
    </button>
  )

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <Button value="C" onClick={handleClear} className="operator" />
        <Button value="±" onClick={() => setDisplay(String(parseFloat(display) * -1))} className="operator" />
        <Button value="%" onClick={() => setDisplay(String(parseFloat(display) / 100))} className="operator" />
        <Button value="÷" onClick={() => handleOperator('/')} className="operator" />

        <Button value="7" onClick={() => handleNumber('7')} />
        <Button value="8" onClick={() => handleNumber('8')} />
        <Button value="9" onClick={() => handleNumber('9')} />
        <Button value="×" onClick={() => handleOperator('*')} className="operator" />

        <Button value="4" onClick={() => handleNumber('4')} />
        <Button value="5" onClick={() => handleNumber('5')} />
        <Button value="6" onClick={() => handleNumber('6')} />
        <Button value="-" onClick={() => handleOperator('-')} className="operator" />

        <Button value="1" onClick={() => handleNumber('1')} />
        <Button value="2" onClick={() => handleNumber('2')} />
        <Button value="3" onClick={() => handleNumber('3')} />
        <Button value="+" onClick={() => handleOperator('+')} className="operator" />

        <Button value="0" onClick={() => handleNumber('0')} className="zero" />
        <Button value="." onClick={handleDecimal} />
        <Button value="=" onClick={handleEquals} className="equals" />
      </div>
    </div>
  )
}