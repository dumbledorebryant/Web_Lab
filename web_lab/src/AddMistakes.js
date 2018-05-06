import React from 'react'
import {InputGroup, FormControl, DropdownButton, MenuItem, Button, PageHeader} from 'react-bootstrap'
import 'react-quill/dist/quill.snow.css'
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
Quill.register('modules/imageDrop', ImageDrop);

class AddMistakes extends React.Component{
    constructor(){
        super();
        this.state={
            text:"",
            tag_input:""
        };
        this.GetTag = this.GetTag.bind(this);
    }
    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image','formula'],
            ['clean'],
        ],
        imageDrop: true,
    };

    formats = [
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'indent',
        'link', 'image','formula','clean'
    ];

    GetTag(){
        this.setState({
            tag_input: "Maths"
        })
    }

    render(){
        return(
            <div>
                <br/>
                <InputGroup>
                    <InputGroup.Button>
                        <Button type="button">Add Title</Button>
                    </InputGroup.Button>
                    <FormControl type="text"/>
                    <InputGroup.Button>
                        <Button type="submit">Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
                <br/>

                <InputGroup>
                    <DropdownButton componentClass={InputGroup.Button}
                                    id="input-dropdown-addon"
                                    title="Add Tag" type="button" >
                        <MenuItem key="added" >Tags added</MenuItem>
                        <MenuItem divider />
                        <MenuItem key="maths" onSelect={this.GetTag}>Maths</MenuItem>
                        <MenuItem key="physics">Physics</MenuItem>
                        <MenuItem key="chemistry">Chemistry</MenuItem>
                    </DropdownButton>
                    <FormControl type="text" value={this.state.tag_input}/>
                    <InputGroup.Button>
                        <Button type="submit">Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
                <PageHeader><small>Add Contents</small></PageHeader>
                <ReactQuill theme="snow" value={ this.state.text }
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Please input Mistakes-Content">
                </ReactQuill>
                <PageHeader><small>Add Analysis</small></PageHeader>
                <ReactQuill theme="snow" value={ this.state.text }
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Please input Reason-Analysis">
                </ReactQuill>
            </div>
        )
    }
}
export default AddMistakes;