import React, { Component } from 'react';


const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }


    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);

        // this.setState({ temperature: e.target.value });
    }



    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }


    

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput
