import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MyViewCompo from './MyViewCompo'
import store from './../react-redux/store/store'
import Action from './action'

export default class React_redux extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                <MyViewCompo />
                <Action />
                </div>
            </Provider>
        )
    }
}
