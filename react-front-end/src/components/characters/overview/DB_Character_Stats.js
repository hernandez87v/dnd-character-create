import React from 'react';
import CharacterStats from './Ability_Points_Container';

export default function CharacterStats(props) {
  return (
    <div className="abp-div">
      <div className="abp-row">
        <CharacterStats name="Strength" abilityScore={props.strength} />
        <CharacterStats name="Dexterity" abilityScore={props.dexterity} />
        <CharacterStats name="Constitution" abilityScore={props.constitution} />
      </div>
      <div className="abp-row">
        <CharacterStats name="Intelligence" abilityScore={props.intelligence} />
        <CharacterStats name="Wisdom" abilityScore={props.wisdom} />
        <CharacterStats name="Charisma" abilityScore={props.charisma} />
      </div>
    </div>
  );
}
