import React, { Component } from 'react'
import axios from 'axios'
import CreateLi from './CreateLi'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export default class FaceData extends Component {
    state={
        posts:false
    }


    componentDidMount(){

        setTimeout(()=>{


            axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((e)=>{
            // console.log(e.data)

            let x = e.data.map(ele=>{
                return {title:ele.title,id:ele.id}
            })

            this.setState({
                posts:x
            })

        })
        .catch(err=>{
            console.log(err.messages)
        })

        },2000)
        

    }

    render() {
        let allLi
        if(this.state.posts !== false){
            allLi = this.state.posts.map(el=>{
                return <CreateLi data={el} key={el.id} />
            })
        }

        if(this.state.posts===false){
            return (
                <div className="container mt-5">
                    <div className="row mt-5">
                        <div className='col-md-2 offset-md-4 mt-5'>
                        {/* <Spinner animation="grow" size='lg' className="mt-5" /> */}



                        <Button variant="primary" disabled>
                            <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            <span className="sr-only">Loading...</span>
                        </Button>{' '}
                        <Button variant="primary" disabled>
                            <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            Loading...
                        </Button>




                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <ul>
                    {allLi}
                </ul>
             )
        }
    }
}
