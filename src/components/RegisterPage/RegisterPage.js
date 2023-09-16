import { Component } from "react";
import "./registerPage.css"

export class RegisterPage extends Component {
    state = {
        usernameValue: "",
        emailValue: "",
        passwordValue: "",
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    onRegisterBtnClick = () => {
        this.props.handler(this.state)
        this.setState({
            usernameValue: "",
            emailValue: "",
            passwordValue: "",
        })
    }

    render() {
        return (<div className="register-wrapper">
            <h1 className="register-title">Register</h1>
            <div className="register-input-wrapper">
                <div className="register-item">
                    <label className="label-input" htmlFor="usernameValue">Username:</label>
                    <input
                        id="username"
                        name="usernameValue"
                        onChange={this.handleInputChange}
                        value={this.state.usernameValue}
                        placeholder="Username"
                        className="registerInput"></input>
                </div>
                <div className="register-item">
                    <label className="label-input" htmlFor="emailValue">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="emailValue"
                        onChange={this.handleInputChange}
                        value={this.state.emailValue}
                        placeholder="Email"
                        className="registerInput"></input>
                </div>
                <div className="register-item">
                    <label className="label-input" htmlFor="passwordValue">Password:</label>
                    <input
                        id="password"
                        name="passwordValue"
                        type="password"
                        onChange={this.handleInputChange}
                        value={this.state.passwordValue}
                        placeholder="Password"
                        className="registerInput"></input>
                </div>
            </div>
            <div className="register-btn-wrapper">
                <button disabled={!(this.state.usernameValue && this.state.emailValue && this.state.passwordValue)} onClick={this.onRegisterBtnClick} className="register-btn">Save</button>
            </div>
        </div>
        )
    }
}