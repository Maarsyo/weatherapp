import React from 'react';
import './App.css'
import InputCity from './containers/InputCity';

export default class App extends React.Component {
  state = {
    temperature: '',
    error: '',
    isBusy: false
  }

  getTemperature = (city) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d885aa1d783fd13a55050afeef620fcb';
    this.setState({
      isBusy: true
    })
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      const kelvin = data.main.temp;
      const celcius = kelvin - 273.15;

      this.setState({
        temperature: Number(celcius).toFixed(2),
        isBusy: false
      })
    }).catch(error => {
      this.setState({
        error: error.message(),
        isBusy: false
      })
    })

  }


  render() {
    let data = 0;
    if (this.state.isBusy && !this.state.error) {
      data = <p style={{ textAlign: 'center' }}> Buscando  ... </p>
    } else if (this.state.error) {
      data = <p style={{ textAlign: 'center' }}>Algo deu errado : {this.state.error}</p>
    } else if (this.state.temperature !== '') {
      parseInt(this.state.temperature).toFixed(2);
      data = <p style={{ textAlign: 'center' }}>A temperatura é : {this.state.temperature}°C</p>
    }

    return (
      <React.Fragment>
        <div className="div">
          <h1 style={{ textAlign: 'center' }}>Veja a temperatura!</h1>
          <InputCity getTemperature={this.getTemperature} /> <br />
          <h2>{data}</h2>
        </div>
      </React.Fragment>
    );
  }
}
