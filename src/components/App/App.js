import { Component } from "react";
import RegisterPage from "../RegisterPage";
import UserPage from "../Userpage";

export class App extends Component {
  state = {
    userData: JSON.parse(localStorage.getItem("userData")) || {},
    isEdited: localStorage.getItem("isEdited"),
    fileUrl: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  imageHandler = (fileUrl) => {
    this.setState({
      fileUrl,
    });
  };

  onRegisterBtnClick = () => {
    localStorage.setItem("isEdited", true);
    localStorage.setItem("userData", JSON.stringify(this.state.userData));
    this.setState({ isEdited: true });
  };

  render() {
    console.log(this.state.isEdited);
    console.log(localStorage.getItem("isEdited"));
    return (
      <div className="App">
        {!this.state.isEdited ? (
          <RegisterPage
            handleInputChange={this.handleInputChange}
            userData={this.state.userData}
            onRegisterBtnClick={this.onRegisterBtnClick}
            imageHandler={this.imageHandler}
            fileUrl={this.state.fileUrl}
          />
        ) : (
          <UserPage
            userData={this.state.userData}
            fileUrl={this.state.fileUrl}
          />
        )}
      </div>
    );
  }
}
