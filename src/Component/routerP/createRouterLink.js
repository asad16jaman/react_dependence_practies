import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateRouterLink(props) {
    let x = '/detail/'+props.id
    return (
        
            <Link to={x} className="btn btn-success float-right btn-sm mb-3">Detail</Link>
        
    )
}

