import React from 'react'
import { connect } from 'react-redux'

function MyViewCompo(props) {
    return (
        <div>
            hellow world it is compo {props.count}, name is {props.name} home is , {props.home}
        </div>
    )
}

function mapStateToProps(state){

    return{
        ...state
    }
}


export default connect(mapStateToProps)(MyViewCompo)
