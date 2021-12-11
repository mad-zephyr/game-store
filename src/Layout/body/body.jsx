import React from 'react'
import Card from '../../components/card/card'
import './body.sass'
import { importAll } from '../../utils/helpers.js'
 
const Body = (props) => {
  const {children, results} = props
  console.log(`Body: `, results)
 
  const gameCards = results?.map((data) => <Card key={data.id} data={data}/> )
 
  return (
    <div className="content"> 
      {children} 

      <div className="gamecontainer">
        {gameCards}
      </div>
    </div>
  )
}

export default Body

