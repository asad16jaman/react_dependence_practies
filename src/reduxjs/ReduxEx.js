import React, { Component } from 'react'
import { createStore } from 'redux'

export default class ReduxEx extends Component {
    render() {


        const reduce1=(state={},action)=>{
            if (action.type == 'asad'){
                return action.payload
            }else if (action.type == 'helow'){
                return {}
            }

            return state
        }

        const store = createStore(reduce1)

        store.subscribe(()=>{
            console.log(store.getState())
        })

        store.dispatch({type:'asad',payload:{
            name:'asad',
            roll:202014,
            home:'Nilphamari'
        }})

        store.dispatch({type:'helow'})


        return (
            <div>
                
            </div>
        )
    }
}
