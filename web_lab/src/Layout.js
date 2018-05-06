import React from 'react'
import {PageHeader} from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import UserINFO from './UserINFO'
import './Layout.css'


class Layout extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <UserINFO/>
                    </div>
                    <div className="col-md-10">
                        <PageHeader>Mistakes FIXer
                            <br/>
                            <small>The Best or Nothing</small>
                        </PageHeader>
                        <NavigationBar/>
                    </div>
                </div>


            </div>

        )
    }
}
export default Layout;