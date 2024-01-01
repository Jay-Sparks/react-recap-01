import { useState, useEffect, useRef } from 'react'

const Clicker = ({ keyName, color, increment }) => {

  const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
  const buttonRef = useRef()
  console.log(buttonRef);

  useEffect(() => 
  {
    buttonRef.current.style.backgroundColor = 'papayawhip'
    buttonRef.current.style.color = 'salmon'
    console.log(buttonRef.current);

    return () => 
    {
      localStorage.removeItem(keyName)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(keyName, count)
  }, [count])

  const buttonClick = () => {
    setCount(count => count + 1)
    increment()
  }

  return (
    <>
      <div style={{color: color}}>Clicks count: { count } </div>
      <button ref={ buttonRef } onClick={ buttonClick }>Click me</button>
    </>
  )
}

export default Clicker