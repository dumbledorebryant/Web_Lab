import React from 'react'
import {Navbar, FormControl, FormGroup, Button} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './MistakesTable.css'

const products = [];

function addProducts(quantity) {
    for (let i = 0; i < quantity; i++) {
        products.push({
            tag: i,
            content: "Mistakes"+i.toString(),
            reason: 9*i,
            recordTime:"第"+i.toString()+"天",
            repeatedTimes:3*i,
            newContents:"bao"
        });
    }
}
//添加数据
addProducts(50);


class MistakesTable extends React.Component {
    constructor() {
        super();
        this.state = {
            sortName: undefined,
            sortOrder: undefined
        };
        this.onSortChange = this.onSortChange.bind(this);
    }



    onSortChange(sortName, sortOrder) {
        this.setState({
            sortName,
            sortOrder
        });
    }


    render() {


        const options = {
            sortName: this.state.sortName,
            sortOrder: this.state.sortOrder,
            onSortChange: this.onSortChange,
        };
        const selectRow = {
            mode: 'checkbox',  // multi select
            clickToSelectAndEditCell: true,
            columnWidth: '30px'
        };
        const cellEdit = {
            mode: 'click', // click cell to edit
            blurToSave: true,
        };
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Brand</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                <BootstrapTable data={ products } height="300px" keyBoardNav
                                columnFilter
                                selectRow={ selectRow }
                                cellEdit={ cellEdit } pagination
                                options={ options }>
                    <TableHeaderColumn dataField='tag' isKey={true} dataSort={ true }>Tag</TableHeaderColumn>
                    <TableHeaderColumn dataField='content'>Content</TableHeaderColumn>
                    <TableHeaderColumn dataField='reason'>Reasons</TableHeaderColumn>
                    <TableHeaderColumn dataField='recordTime' dataSort={ true }>Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='repeatedTimes' dataSort={ true }>Repeated</TableHeaderColumn>
                </BootstrapTable >
            </div>

        );
    }

}
export default MistakesTable;
