import React from 'react'

export default function PointsContainer(props) {

  const getModifier = function(number) {
    let result = (number - 10)/2
    return Math.floor(result)
  }
  let modifier = getModifier(props.abilityScore)

  return (
    <div className="abp-unit">
      <h1 className="ab-unit-info">{modifier}</h1>
      <p className="ab-unit-info">{props.abilityScore}</p>
      <h3 className="ab-unit-info">{props.name}</h3>
    </div>
  )

}