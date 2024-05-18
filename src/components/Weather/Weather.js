import React from "react";
import axios from "axios";
/* const Weather = () => {
    return (
        <div>Weather App</div>
    )
}
export default Weather */
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

    }

    async componentDidMount() {
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: "https://www.metaweather.com/api/location/1236594/" },
        }
        )
        setTimeout(() => {
            this.setState({
                title: response.data.title
            })
        }, 500);

        console.log("check data: ", response.data)
    }
    render() {
        return (
            <div>Weather App! Title = {this.state.title}</div>
        )
    }
}
export default Weather