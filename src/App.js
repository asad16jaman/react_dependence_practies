import React, { Component } from 'react'
import React_redux from './Component/react_redux'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import RouterButton from './Component/routerP/routerButton'
import FaceData from './Component/routerP/FaceData'
import DetailData from './Component/routerP/DetailData'


export default class App extends Component {
    render() {
        return (
            <div>
                
                hellow it is index page 
                <BrowserRouter>
                <RouterButton />
                    <Switch>
                        <Route path='/' exact render={()=>{ return <h1>helllow it is home page</h1>}} />
                        <Route path='/action' exact component={React_redux} />
                        <Route path='/data' component={FaceData} />
                        <Route path='/detail/:id' component={DetailData} />

                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}
