import React, { Component } from 'react'
import axios from 'axios'

export default class DetailData extends Component {
    state={
        detail:''
    }
    componentDidMount(){
        const URL = 'https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id
        axios.get(URL)
        .then(el=>{
            this.setState({
                detail:el.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        let detail = this.state.detail
        if (this.state.detail === ''){
            return <h1>loading..................</h1>
        }else{
            return (
                <div>
                    <h1>Your UserId is : {detail.userId}</h1>
                    <h1>Your Id is : {detail.id}</h1>
                    <h1>Your title is : {detail.title}</h1>
                    <p>Your body is : {detail.body}</p>
                </div>
            )
        }
    }
}
