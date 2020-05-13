import React from 'react'

export default function BasicInfo(props) {

  return (
    <div>
      <h3>{props.name}</h3>
      <p>Level: {props.level}</p>
      <p>Race: {props.race}</p>
      <p>Class: {props.character_class}</p>
      <p>Background: {props.background}</p>
    </div>
  )

}