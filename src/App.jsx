import React, {useState, useEffect} from 'react' 
import Layout from './Layout/Layout'

const App = () => {
  const [appData, setAppData] = useState({})
  
  useEffect(() => {

    async function fetchData(){
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "https://xmad.netlify.app/"
      }
      const URL = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&platforms=187`
      const request = await fetch(URL, { 
        method: "GET",
        headers: headersList
      })  
      setAppData(await request.json())
    }
    fetchData()
  }, [])

  return (
    <>
      <Layout data={appData}/>
    </>
  )
}

export default App