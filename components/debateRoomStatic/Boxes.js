import React from 'react'

export default function Boxes({title,content}) {
    return (
        <div className="center column boxColor pb2 border-radius5px box-shadow w100">
        <h5 className="p1">{title}</h5>
        <p>{content}</p>
      </div>
    )
}



