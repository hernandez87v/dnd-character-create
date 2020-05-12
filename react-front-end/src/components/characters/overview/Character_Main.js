import React from 'react'
import AbilityPointsAll from './AP_all'
import Avatar from './Character_Avatar'
import BasicInfo from './Character_Basic_info'

export default function CharacterMain() {

  return (
    <div>
      <Avatar />
      <BasicInfo />
      <AbilityPointsAll />
    </div>
  )

}