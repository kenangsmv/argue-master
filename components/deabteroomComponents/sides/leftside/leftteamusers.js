import React from 'react'

export default function leftteam({username,score}) {
    return (
        <div className="row space-between">
            <div className="teamUsers">
                <span>{username}</span>
            </div>
            <div className="teamUsersPoint">
                <span>{score}</span>
            </div>
        </div>
    )
}
