import React from 'react'
import {NavLink} from 'react-router-dom'

export default function RouterButton() {
    return (
        <div>
            <NavLink to="/" exact className="btn">Home</NavLink>
            <NavLink to="/action" className="btn">Action</NavLink>
            <NavLink to="/data" className="btn">dataFatch</NavLink>
        </div>
    )
}
