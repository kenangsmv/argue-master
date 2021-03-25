import React from 'react'

export default function Boxes({title,content}) {
    return (
        <div className="center column boxColor pl1   pr1 pb1 border-radius5px box-shadow w100">
        <h5>{title}</h5>
        <span>{content}</span>
      </div>
    )
}



