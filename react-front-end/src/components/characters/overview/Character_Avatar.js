import React from 'react'

export default function Avatar(props) {

  return (
    <div>
      <img src={props.avatar_url} className="avatar-img"></img>
    </div>
  )

}