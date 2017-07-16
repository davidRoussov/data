import React, { Component } from  "react";
import { connect } from 'react-redux';

import { createNewValue } from '../actions/mapTime';

class DataEntry extends Component {

    constructor() {
        super();
        this.state = {'newValue': ''};
    }

    createNewValue(e) {
        e.preventDefault();
        const newValueObject = {
            time: new Date(),
            value: this.state.newValue
        };
        createNewValue('mass', newValueObject);
    }

    handleInputValue(e) {
        this.setState({ newValue: e.target.value });
    }

    formatTime(time) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = (new Date(time));
        return `${days[date.getDay()]}
                ${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDate()}
                ${date.getHours()}:${date.getMinutes()}`;
    }

    render() {

        const inputContainerStyle = {
            padding: "10px",
            width: '200px'
        };

        const submitButtonStyle = {
            marginTop: "8px",
            width: "100%"
        }

        const tableStyle = {
            width: '200px'
        };

        const data = this.props.timeValueData;
        const tableOfPast = data.map((row, i) => 
          <tr key={i}>
              <td><p>{this.formatTime(row.time)}</p></td>
              <td>{row.value}</td>
          </tr>
        );

        return (
            <div>
                <form onSubmit={this.createNewValue.bind(this)} style={inputContainerStyle}>
                    <input type="text" className="form-control" value={this.state.newValue} onChange={this.handleInputValue.bind(this)}/>
                    <button type="submit" className="btn btn-primary" style={submitButtonStyle}>Submit</button>   
                </form>
                <table style={tableStyle} className="table table-bordered table-hover">
                  <thead>
                    <tr>    
                      <th>Time</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableOfPast}
                  </tbody>
                </table>
            </div>
        )
    } 
}

const mapDispatchToProps = { createNewValue };

export default connect(
    () => {},
    mapDispatchToProps
)(DataEntry);