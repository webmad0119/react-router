import React, { Component } from "react"
import BoilingVerdict from "./boilingVerdict";
import TemperatureInput from "./temperatureInput";
import { tryConvert, toCelsius, toFahrenheit } from './conversionFunctions';

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            temperature: '0',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({ scale: 'f', temperature });
    }

    render = () => {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <h1>Calculator</h1>
                <TemperatureInput scale="c" temperature={celsius}
                    onTemperatureChange={temperature => this.handleCelsiusChange(temperature)} />

                <TemperatureInput scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={temperature => this.handleFahrenheitChange(temperature)} />

                <BoilingVerdict celsius={celsius}></BoilingVerdict>
            </div>
        )
    }
}

export default Calculator;