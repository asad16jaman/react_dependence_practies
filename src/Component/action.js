import React from 'react'
import { connect } from 'react-redux'

function Action(props) {
    return (
        <div>
            <button className="btn btn-outline-success mx-2" onClick={()=>{
                return props.add()
            }}> + </button>
            <button className="btn btn-danger" onClick={()=>(props.sub())}> - </button>
        </div>
    )
}

function mapActionToProps(dispatch){

    return{
        add:()=>{
            return dispatch({type:'ADD'})
        },
        sub:()=>{
            return dispatch({type:'SUB'})
        }
    }
}

export default connect(null,mapActionToProps)(Action)

// export default Action
