import { Component } from "react";
import "./userPage.css"

class UserPage extends Component {
    render() {

        const { usernameValue, emailValue, passwordValue, imageHandler } = this.props





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
                    <div>
                        <img src={this.props.fileUrl} alt="" width={100} height="auto" />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage