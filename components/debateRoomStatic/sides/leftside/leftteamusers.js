import React from 'react'

export default function leftteam({username,score}) {
    return (
        <div className="row space-between">
            <h3 className="teamUsers">
                <span>{username}</span>
            </h3>
            <h4 className="teamUsersPoint">
                <span>{score}</span>
            </h4>
        </div>
    )
}
