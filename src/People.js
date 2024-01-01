import { useState, useEffect } from "react"

export default function People()
{
    const [ people, setPeople ] = useState([])

    // asynchronous fetch structure (cutest :D)
    // const getPeople = async () => 
    // {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const result = await response.json()
    //     console.log(result)
    // }

    const getPeople = async () => 
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        
        setPeople(result)
    }
    
    useEffect(() => {
      getPeople()
    }, [])
    
    
    return <div>
        <h2>People</h2>
        <ul>
            { people.map( person => 
                <li key={ person.id }>{ person.name }</li> ) }
        </ul>
    </div>
}