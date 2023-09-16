import { Component } from "react";
import "./registerPage.css"

export class RegisterPage extends Component {


    render() {
        return (<div className="register-wrapper">
            <h1 className="register-title">Register</h1>
            <div className="register-input-wrapper">
                <div className="register-item">
                    <label className="label-input" htmlFor="usernameValue">Username:</label>
                    <input
                        id="username"
                        name="usernameValue"
                        onChange={this.props.handleInputChange}
                        value={this.props.usernameValue}
                        placeholder="Username"
                        className="registerInput"></input>
                </div>
                <div className="register-item">
                    <label className="label-input" htmlFor="emailValue">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="emailValue"
                        onChange={this.props.handleInputChange}
                        value={this.props.emailValue}
                        placeholder="Email"
                        className="registerInput"></input>
                </div>
                <div className="register-item">
                    <label className="label-input" htmlFor="passwordValue">Password:</label>
                    <input
                        id="password"
                        name="passwordValue"
                        type="password"
                        onChange={this.props.handleInputChange}
                        value={this.props.passwordValue}
                        placeholder="Password"
                        className="registerInput"></input>
                </div>
            </div>
            <div className="register-btn-wrapper">
                <button disabled={!(this.props.usernameValue && this.props.emailValue && this.props.passwordValue)} onClick={this.props.onRegisterBtnClick} className="register-btn">Save</button>
            </div>
        </div>
        )
    }
}