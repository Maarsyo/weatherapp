import React from 'react' ;
import './InputCity.css'

export default class InputCity extends React.Component {
    state={
        city : ''
    }

    handleChange = event => {
        this.setState({
            city : event.target.value
        })
    }
    render(){
        return(
            <div style={{textAlign : 'center', marginTop: '9px'}}>
                <input type="text" 
                placeholder="Coloque o nome da cidade"
                className="input"
                value={this.state.city}
                onChange={this.handleChange} />
                <br />
                <button className="button" onClick={()=>{this.props.getTemperature(this.state.city)}}>Pegue a temperatura</button>
            </div>
        );
    }
}
