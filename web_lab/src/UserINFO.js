import React from 'react'
import './UserINFO.css'
import {Form, FormGroup, ControlLabel, FormControl, Glyphicon, Button, OverlayTrigger, Popover} from 'react-bootstrap'

class UserINFO extends React.Component{
    constructor(){
        super();
        this.state={
            Username: "",
            Password: "",
            rePassword: "",
            Email: "",
            PhoneNUM: "",
            HelpInfo: ""
        };
        this.ChangeUsername = this.ChangeUsername.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.ChangeRePassword = this.ChangeRePassword.bind(this);
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangePhoneNUM = this.ChangePhoneNUM.bind(this);
        this.CheckValidation = this.CheckValidation.bind(this);
    }
    ChangeUsername(event){
        this.setState({
            Username: event.target.value
        })
    }
    ChangePassword(event){
        this.setState({
            Password: event.target.value
        })
    }
    ChangeRePassword(event){
        this.setState({
            rePassword: event.target.value
        })
    }
    ChangeEmail(event){
        this.setState({
            Email: event.target.value
        })
    }
    ChangePhoneNUM(event){
        this.setState({
            PhoneNUM: event.target.value
        })
    }

    CheckValidation(){
        if(this.state.Username === ""){
            this.setState({
                HelpInfo: "* 用户名不能为空!"
            })
        }
        else if(this.state.Password === ""){
            this.setState({
                HelpInfo: "* 密码不能为空"
            })
        }
        else if(this.state.Password !== ""){
            let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
            if (!reg.test(this.state.Password)){
                this.setState({
                    HelpInfo: "* 密码包含数字和字母"
                })
            }
        }
        else if(this.state.rePassword !== "" && this.state.rePassword !== this.state.Password){
            this.setState({
                HelpInfo: "* 两次输入密码不一致"
            })
        }
        else if(this.state.Email !== ""){
            let reg = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
            if(!reg.test(this.state.Email)){
                this.setState({
                    HelpInfo: "* 请输入正确邮箱格式"
                })
            }
        }
        else if(this.state.PhoneNUM !== "") {
            if(this.state.PhoneNUM.length() !== 11){
                this.setState({
                    HelpInfo: "* 手机号码需要11位"
                })
            }
        }
    }
    render(){
        const popoverBottom = (
            <Popover id="popover-positioned-bottom" title="Wrong!">
                <strong>Pay Attention: </strong>
                {this.state.HelpInfo}
            </Popover>
        );
        return(
            <div>
                <Form className="SignIn">
                    <FormGroup controlId="formValidationSuccess3" validationState="success">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" onChange={this.ChangeUsername}/>
                        <FormControl.Feedback>
                            <Glyphicon glyph="star" />
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formValidationSuccess3" validationState="success">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" onChange={this.ChangePassword} />
                        <FormControl.Feedback>
                            <Glyphicon glyph="heart" />
                        </FormControl.Feedback>
                    </FormGroup>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                        <Button className="User" bsStyle="primary" onClick={this.CheckValidation}>User Sign In</Button>
                    </OverlayTrigger>

                </Form>
                <br/>
                <Form componentClass="SignUp">
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" onChange={this.ChangeUsername}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formValidationWarning2" validationState="warning">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" onChange={this.ChangePassword}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formValidationError2" validationState="error">
                        <ControlLabel>rePassword</ControlLabel>
                        <FormControl type="text" onChange={this.ChangeRePassword}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formValidationWarning2" validationState="warning">
                        <ControlLabel>E-mail</ControlLabel>
                        <FormControl type="text" onChange={this.ChangeEmail}/>
                        <FormControl.Feedback />
                    </FormGroup>

                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl type="text" onChange={this.ChangePhoneNUM}/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                        <Button className="User" bsStyle="success" onClick={this.CheckValidation}>User Sign Up</Button>
                    </OverlayTrigger>

                </Form>
            </div>

        )
    }
}
export default UserINFO;