import React from "react";

export class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit(e) {
        alert(`Сочинение отправлено: ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Сочинение
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value={"Отправить"} />
            </form>
        );
    }
}
