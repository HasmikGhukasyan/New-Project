import { Component } from "react";
import "./registerPage.css";

export class RegisterPage extends Component {
  state = {
    validationErrors: {},
  };

  onUploadHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      const fileUrl = reader.result;
      console.log("fileUrl: ", fileUrl);
      this.props.imageHandler(fileUrl);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  validateUsername = (username) => {
    if (!username || username.trim().length < 3) {
      this.setState({
        validationErrors: {
          ...this.state.validationErrors,
          username: "Wrong userName",
        },
      });
      return false;
    } else {
      this.setState({
        validationErrors: {
          ...this.state.validationErrors,
          username: "",
        },
      });
      return true;
    }
  };

  validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!email || !email.trim() || !emailRegex.test(email)) {
      console.log("email err: ", email);
      this.setState({
        validationErrors: {
          ...this.state.validationErrors,
          email: "Please enter a valid email",
        },
      });
      return false;
    } else {
      this.setState({
        validationErrors: {
          ...this.state.validationErrors,
          email: "",
        },
      });
      return true;
    }
  };

  validatePassword = (password) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    if (
      !password ||
      !password.trim() ||
      password.length < 8 ||
      !hasLetter ||
      !hasNumber ||
      !hasSpecialChar
    ) {
      this.setState({
        validationErrors: {
          ...this.state.validationErrors,
          password: "Please enter a strong password",
        },
      });
      return false;
    } else {
      this.setState({
        validationErrors: {
          ...this.state.validationErrors,
          password: "",
        },
      });
      return true;
    }
  };

  validate = () => {
    const { usernameValue, emailValue, passwordValue } = this.props.userData;
    console.log(usernameValue, emailValue, passwordValue);
    if (
      this.validateUsername(usernameValue) &&
      this.validateEmail(emailValue) &&
      this.validatePassword(passwordValue)
    ) {
      return true;
    }
    return false;
  };

  handleBtnClick = () => {
    if (this.validate()) {
      console.log("changing view");
      this.props.onRegisterBtnClick();
    }
  };

  render() {
    const { usernameValue, emailValue, passwordValue } = this.props.userData;
    return (
      <div className="register-wrapper">
        <h1 className="register-title">Register Page</h1>
        <div className="register-input-wrapper">
          <div className="register-item">
            <label className="label-input" htmlFor="usernameValue">
              Username:
            </label>
            <input
              id="username"
              name="usernameValue"
              onChange={this.props.handleInputChange}
              value={usernameValue}
              placeholder="Username"
              className="registerInput"
            />
          </div>
          <div className="register-item">
            <label className="label-input" htmlFor="emailValue">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="emailValue"
              onChange={this.props.handleInputChange}
              value={emailValue}
              placeholder="Email"
              className="registerInput"
            />
          </div>
          <div className="register-item">
            <label className="label-input" htmlFor="passwordValue">
              Password:
            </label>
            <input
              id="password"
              name="passwordValue"
              type="password"
              onChange={this.props.handleInputChange}
              value={passwordValue}
              placeholder="Password"
              className="registerInput"
            />
          </div>
          <input
            onChange={this.onUploadHandler}
            type="file"
            accept="image/jpeg, image/png, image/jpg"
          />
          <img src={this.props.fileUrl} alt="" width={100} height="auto" />
        </div>
        <div>
          {Object.keys(this.state.validationErrors).map((key) => {
            return <div key={key}>{this.state.validationErrors[key]}</div>;
          })}
        </div>
        <div className="register-btn-wrapper">
          <button onClick={this.handleBtnClick} className="register-btn">
            Save
          </button>
        </div>
      </div>
    );
  }
}
