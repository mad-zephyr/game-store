import React from 'react'
import './card.sass'
 // console.log(props.data)


 const Card = (props) => {
  const {background_image, name, rating, platforms} = props.data

  const badgePlatforms = platforms.map(badge => {
    const { platform } = badge
    return <span className='tags-elem' key={platform.id}> {platform.name} </span>
  })
  
  badgePlatforms.length = 3

  return (
    <div className="card"> 
      <div className='card-image' loading="lazy" style={{  
        background: `url(${background_image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} alt="name" />
      <h3>Rating: {rating}</h3>
      <h2>{name}</h2>
      <div className='tags'>
        { badgePlatforms }
      </div>
    </div>
  ) 
}

export default Card