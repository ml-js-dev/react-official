import React from "react";

const UserGreeting = (props) => <h1>Welcome back!</h1>;
const GuestGreeting = (props) => <h1>Please login</h1>;

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true,
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false,
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        isLoggedIn
            ? (button = <LogoutButton onClick={this.handleLogoutClick} />)
            : (button = <LoginButton onClick={this.handleLoginClick} />);
        return (
            <>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </>
        );
    }
}
