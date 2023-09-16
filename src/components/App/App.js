import { Component } from "react";
import RegisterPage from "../RegisterPage";
import UserPage from "../Userpage/UserPage";

export class App extends Component {

    state = {
        isEditMode: true,
        data: null
    }

    handler = (data) => {
        this.setState({
            data, isEditMode: false
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.isEditMode ? <RegisterPage handler={this.handler} /> : <UserPage data={this.state.data} />
                }
            </div>
        )
    }
}