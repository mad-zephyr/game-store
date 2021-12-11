import React from 'react'
import './card.sass'
 
 const Card = (props) => {
  const {background_image, name, rating, platforms} = props.data
  console.log('CARD: ', background_image)

  const badgePlatforms = platforms.map(badge => {
    const { platform } = badge
    return <span className='tags-elem' key={platform.id}> {platform.name} </span>
  })
  
  badgePlatforms.length = 3

  return (
    <div className="card"> 
      <img src={background_image} alt="name" />
      <h3>Rating: {rating}</h3>
      <h2>{name}</h2>
      <div className='tags'>
        { badgePlatforms }
      </div>
    </div>
  ) 
}

export default Card