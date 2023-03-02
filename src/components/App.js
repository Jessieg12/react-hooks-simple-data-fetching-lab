// create your App component here
import React, {useEffect, useState} from "react";

function App () {
  const [doggoPic, setDoggoPic] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  let fetchURL = 'https://dog.ceo/api/breeds/image/random'
  useEffect(() => {
    fetch(fetchURL)
    .then(resp => resp.json())
    .then(data => {
      setDoggoPic(data.message)
      setIsLoaded(true)
  })
  }, [fetchURL])

  if(!isLoaded) return <p>Loading...</p>

  return (

    <img src={doggoPic} alt="A Random Dog"/>
    
  )
}

export default App