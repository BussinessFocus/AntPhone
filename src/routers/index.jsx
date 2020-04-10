
import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import router1 from './router1'
import router2 from './router2'
import router3 from './router3'

const routerArr = [...router1,...router2,...router3]

class Index extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {routerArr.map( (route, index) => (
                        <Route key={index} path={route.path} component={route.component} />
                    ))}
                    <Redirect from="/DoctorZhuce" to="/DoctorZhuce/0" />

                    <Redirect from="/" to="/Enterhome/0" />
                </Switch>
            </HashRouter>
        )
    }
}

export default Index