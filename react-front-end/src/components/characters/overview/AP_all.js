import React from 'react'
import PointsContainer from './Ability_Points_Container'

export default function AbilityPointsAll(props) {

  return (
    <div>

      <PointsContainer name="Strength" abilityScore={props.strength}/>
      <PointsContainer name="Dexterity" abilityScore={props.dexterity}/>
      <PointsContainer name="Constitution" abilityScore={props.constitution}/>
      <PointsContainer name="Intelligence" abilityScore={props.intelligence}/>
      <PointsContainer name="Wisdom" abilityScore={props.wisdom}/>
      <PointsContainer name="Charisma" abilityScore={props.charisma}/>

    </div>
  )

}