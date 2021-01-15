// create your App component here
import React, { useState, useEffect } from 'react'

function App() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [dog, setDog] = useState("")

useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((r) => r.json())
    .then((dogObj) => {
        console.log(dogObj.message)
        setDog(dogObj.message)
        setIsLoaded(true)
        })
}, [])
    
if (!isLoaded) return <p>Loading...</p>

    return (
    <div>
        <img src={dog} alt="A Random Dog"/>
    </div>
    )
}
export default App