import React from "react";

const WarningBanner = (props) => {
    if (!props.warning) {
        return null;
    }
    return <div>Warning!</div>;
};

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState((prevState) => ({
            showWarning: !prevState.showWarning,
        }));
    };

    render() {
        return (
            <>
                <WarningBanner warning={this.state.showWarning} />
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </>
        );
    }
}
