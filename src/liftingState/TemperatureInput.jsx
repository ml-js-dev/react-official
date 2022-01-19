import React, { Component } from "react";

const scaleNames = {
    c: "Цельсия",
    f: "Фарингейта",
};

export class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const { scale, temperature } = this.props;
        return (
            <fieldset>
                <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}
