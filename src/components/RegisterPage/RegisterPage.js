import { Component } from "react";
import "./registerPage.css";

export class RegisterPage extends Component {
    state = {
        file: null,
        fileUrl: "",
    }


    onUploadHandler = (event) => {
        const file = event.target.files[0]
        this.setState({
            file,
        })
        var reader = new FileReader()
        reader.onload = () => {
            const fileUrl = reader.result
            this.setState({ fileUrl })
            this.props.imageHandler(fileUrl)
        }
        if (file) {
            reader.readAsDataURL(file);
        }
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
                <input onChange={this.onUploadHandler} type="file" accept="image/jpeg, image/png, image/jpg"></input>
                <img src={this.state.fileUrl} alt="" width={100} height="auto" />
            </div>
            <div className="register-btn-wrapper">
                <button disabled={!(this.props.usernameValue && this.props.emailValue && this.props.passwordValue)} onClick={this.props.onRegisterBtnClick} className="register-btn">Save</button>
            </div>
        </div>
        )
    }
}