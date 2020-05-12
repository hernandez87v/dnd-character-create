import React from 'react'
import PointsContainer from './Ability_Points_Container'

export default function AbilityPointsAll(props) {

  return (
    <div className="abp-div">
      <div className="abp-row-one">
        <PointsContainer name="Strength" abilityScore={props.strength}/>
        <PointsContainer name="Dexterity" abilityScore={props.dexterity}/>
        <PointsContainer name="Constitution" abilityScore={props.constitution}/>
      </div>
      <div className="abp-row-two">
        <PointsContainer name="Intelligence" abilityScore={props.intelligence}/>
        <PointsContainer name="Wisdom" abilityScore={props.wisdom}/>
        <PointsContainer name="Charisma" abilityScore={props.charisma}/>
      </div>

    </div>
  )

}