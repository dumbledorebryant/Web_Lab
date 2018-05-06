import React from 'react'
import {Tab, Row, Col, Nav, NavItem}from 'react-bootstrap'
import MistakesTable from './MistakesTable'

class MistakesContent extends React.Component{
    render(){
        return(
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="Clearfix">
                        <Col sm={3}>
                            <br/>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first">
                                    Maths
                                </NavItem>
                                <NavItem eventKey="second">
                                    Physics
                                </NavItem>
                                <NavItem eventKey="third">
                                    Chemistry
                                </NavItem>
                                <NavItem eventKey="fourth">
                                    English
                                </NavItem>
                                <NavItem eventKey="fifth">
                                    Chinese
                                </NavItem>
                                <NavItem eventKey="sixth">
                                    Biology
                                </NavItem>
                                <NavItem eventKey="seventh">
                                    Chinese
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    <MistakesTable/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <br/>
                                    <MistakesTable/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
export default MistakesContent;
