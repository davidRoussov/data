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
        this.props.createNewValue('mass', newValueObject);
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
        const style = {
            inputContainer: {
                padding: "10px",
                width: '100%'
            },
            submitButton: {
                marginTop: "8px",
                width: "100%"
            },
            table: {
                width: '100%'
            },
            heading: {
                textAlign: 'center'
            },
            container: {
                width: '100%',
                padding: '8px',
                backgroundColor: '#B3CE94',
                height: '100%'
            }
        }

        const data = this.props.timeValueData;
        const tableOfPast = data.map((row, i) => 
          <tr key={i}>
              <td><p>{this.formatTime(row.time)}</p></td>
              <td>{row.value}</td>
          </tr>
        );

        return (
            <div style={style.container}>
                <h2 style={style.heading}>Mass</h2>
                <form onSubmit={this.createNewValue.bind(this)} style={style.inputContainer}>
                    <input type="text" className="form-control" value={this.state.newValue} onChange={this.handleInputValue.bind(this)}/>
                    <button type="submit" className="btn btn-primary" style={style.submitButton}>Submit</button>   
                </form>
                <table style={style.table} className="table table-inverse table-bordered table-hover">
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

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = { createNewValue };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataEntry);