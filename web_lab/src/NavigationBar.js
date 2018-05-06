import React from 'react'
import {Tabs, Tab, Row, Col} from 'react-bootstrap';
import MistakesContent from "./MistakesContent";
import AddMistakes from './AddMistakes'
import ChallengeAgain from './ChallengeAgain'

class NavigationBar extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col sm={12}>
                        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Scan & Query MISTAKES">
                                <br/>
                                <MistakesContent/>
                            </Tab>
                            <Tab eventKey={2} title="Add MISTAKES">
                                <AddMistakes/>
                            </Tab>
                            <Tab eventKey={3} title="Challenge AGAIN">
                                <ChallengeAgain/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default NavigationBar;