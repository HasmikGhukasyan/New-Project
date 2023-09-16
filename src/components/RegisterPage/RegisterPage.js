import { Component } from "react";
import "./registerPage.css"

export class RegisterPage extends Component {

    state = {
        usernameValue: "",
        emailValue: "",
        passwordValue: "",
    }
    onUsernameChange = (event) => {
        this.setState({
            usernameValue: event.target.value
        })
    }
    onEmailChange = (event) => {
        this.setState({
            emailValue: event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
            passwordValue: event.target.value
        })
    }

    onRegisterBtnClick = () => {
        console.log(this.state)
    }

    render() {
        return (<div className="register-wrapper">
            <div className="register-input-wrapper">
                <input onChange={this.onUsernameChange} value={this.state.usernameValue} placeholder="Username" className="registerInput"></input>
                <input onChange={this.onEmailChange} value={this.state.emailValue} placeholder="Email" className="registerInput"></input>
                <input onChange={this.onPasswordChange} value={this.state.passwordValue} placeholder="Password" className="registerInput"></input>
            </div>
            <div className="register-btn-wrapper">
                <button onClick={this.onRegisterBtnClick} className="register-btn">Save</button>
            </div>
        </div>
        )
    }
}