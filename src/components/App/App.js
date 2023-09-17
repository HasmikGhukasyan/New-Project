import { Component } from "react";
import RegisterPage from "../RegisterPage";
import UserPage from "../Userpage";

export class App extends Component {
    state = {
        usernameValue: "",
        emailValue: "",
        passwordValue: "",
        isEditMode: true,
        fileUrl: "",
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    imageHandler = (fileUrl) => {
        this.setState({
            fileUrl,
        })
    }



    onRegisterBtnClick = () => {
        this.setState({
            isEditMode: false
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.isEditMode ?
                    <RegisterPage
                        handleInputChange={this.handleInputChange}
                        usernameValue={this.state.usernameValue}
                        emailValue={this.state.emailValue}
                        passwordValue={this.state.passwordValue}
                        onRegisterBtnClick={this.onRegisterBtnClick}
                        imageHandler={this.imageHandler}
                    /> : <UserPage
                        usernameValue={this.state.usernameValue}
                        emailValue={this.state.emailValue}
                        passwordValue={this.state.passwordValue}
                        fileUrl={this.state.fileUrl}
                    />
                }
            </div>
        )
    }
}