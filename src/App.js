import { useState, useMemo } from 'react'
import Clicker from './Clicker.js'
import People from './People.js'

export default function App({ clickersCount, children }) 
{
  const [ hasClicker, setHasClicker ] = useState(true)
  const [ totalCount, setTotalCount ] = useState(0)

  const handleToggleClick = () => {
    setHasClicker(!hasClicker)
  }

  const increment = () => {
    setTotalCount(totalCount + 1)
  }



  const colors = useMemo(() => {
    const randomColors = []

    for(let i=0; i<clickersCount; i++)
    randomColors.push(`hsl(${ Math.random() * 360 }deg, 100%, 70%)`)
    return randomColors
  }, [ clickersCount ])


  return (
    <>
      { children }

      <div>Total count: {totalCount}</div>
       
      <button onClick={handleToggleClick}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
      { hasClicker && <>

        { [...Array(clickersCount)].map((value, index) => 
            <Clicker 
              key={ index }
              increment={increment} 
              keyName={`count${index} `}
              color={ colors[index] }
            />
        ) }

        <People />
        
      </> }
    </>
  )
}
