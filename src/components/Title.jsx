import React from 'react'

export default function Title({text, classes}) {
  return (
    <h2 className={classes}>
        {text ? text : "Title"}
    </h2>
  )
}
