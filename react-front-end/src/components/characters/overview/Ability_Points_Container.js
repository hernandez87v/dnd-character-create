import React from 'react'

export default function PointsContainer(props) {

  const getModifier = function(number) {
    let result = (number - 10)/2
    return result.floor
  }
  let modifier = getModifier(props.abilityScore)

  return (
    <div>
      <h1>{modifier}</h1>
      <p>{props.abilityScore}</p>
      <h3>{props.name}</h3>
    </div>
  )

}