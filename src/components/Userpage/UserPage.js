import { Component } from "react";
import "./userPage.css"

class UserPage extends Component {
    render() {

        const { usernameValue, emailValue, passwordValue } = this.props.data





        return (
            <div className="userpage-wrapper">
                <div className="userpage-list-container">
                    <div className="userlist-item-container">
                        <span className="userlistItem-title">Username</span>
                        <span>{usernameValue}</span>
                    </div>
                    <div className="userlist-item-container">
                        <span className="userlistItem-title">Email</span>
                        <span>{emailValue}</span>
                    </div>
                    <div className="userlist-item-container">
                        <span className="userlistItem-title">Password</span>
                        <span>{passwordValue}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage