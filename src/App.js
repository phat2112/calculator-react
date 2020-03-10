import React,{useState, useEffect} from 'react';
import './App.css';

const Calculator = () => {
  const number = [
    {count: '1'},
    {count: '2'},
    {count: '3'},
    {count: '4'},
    {count: '5'},
    {count: '6'},
    {count: '7'},
    {count: '8'},
    {count: '9'},
    {count:'-'},
    {count: '0'},
    {count: '.'},
  ]
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [total, setTotal] = useState()
  const calMethod = [
    {method:':'},
    {method:'+'},
    {method: 'x'},
    {method: '-'}
  ]
  const [calculating, setCalculating] = useState('')
  const [method, setMethod] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    const findingMethod = calMethod.find((item, index) => {
          return item.method === method    
    })
    if(findingMethod.method === '+'){
         let totalCount = Math.floor(parseInt(firstNumber) + parseInt( secondNumber))
         setTotal(totalCount)
    }
    if(findingMethod.method === '-'){
         let totalCount = Math.floor(parseInt(firstNumber) - parseInt( secondNumber))
         setTotal(totalCount)
    }
    if(findingMethod.method === 'x'){
      let totalCount = Math.floor(parseInt(firstNumber) * parseInt( secondNumber))
      setTotal(totalCount)
    }
    if(findingMethod.method === ':'){
      let totalCount = Math.floor(parseInt(firstNumber) / parseInt( secondNumber))
      setTotal(totalCount)
    }
    return
  }
  const handleDelete = e => {
    e.preventDefault()
    let deleteItem = calculating.split('')
    console.log(deleteItem)
    setCalculating(deleteItem.slice(deleteItem[deleteItem.length-1],1))
    // if(result){
    //   setCalculating(result)
    //   setTotal(result)
    // }
  
  }
  const handleClick = valueCount => {
    if(method){
      let moreSecondNumber =  secondNumber + valueCount  
      return setSecondNumber(moreSecondNumber)
    }
    else{
      let moreNumber = firstNumber + valueCount
      return setFirstNumber(moreNumber)
    }
  }
  const handleMethod = valueMethod => {
    setMethod(valueMethod)
  }
  useEffect(() => {
    let calculation = firstNumber + method + secondNumber
    setCalculating(calculation)
  },[firstNumber, method, secondNumber ])
  useEffect(() => {
    setTotal(calculating)
  },[calculating])
  return (
    <form className="calculator">
      <div className='result'>
         <h1>{total}</h1>
      </div>
      <div className='calculating-block'>
          <input value={calculating} onChange={e => setCalculating(e.target.value)}/>
      </div>
      <div className='calculate-input'>
        {
          number.map((value, index)=> (
          <input type='button' key={index} value={value.count} className='number' onClick={(e) => handleClick(e.target.value)}/>
          ))
        }
        <div className='calculate-method'>
          {
            calMethod.map((value, index) => (
              <input type='button' key={index} value={value.method} className='method' onClick={(e) => handleMethod(e.target.value)}/>
            ))
          }
        </div>
        <div className='button-calculate'>
        <button className='delete-button' onClick={handleDelete}>/</button>
        <button onClick={handleSubmit} className='calculating-button'>=</button>
        </div>
    </div>
  </form>
  );
}

export default Calculator;
