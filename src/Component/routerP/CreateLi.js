import React, { Component } from 'react'
import CreateRouterLink from './createRouterLink'

export default class CreateLi extends Component {
    render() {
        return (
            <li className='list-group-item'>
                {this.props.data.title}
                <CreateRouterLink  id={this.props.data.id} />
            </li>
        )
    }
}
