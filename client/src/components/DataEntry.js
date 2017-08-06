import React, { Component } from  "react";
import { connect } from 'react-redux';

import { createNewValue } from '../actions/mapTime';
import EditMapTimeCategory from './EditMapTimeCategory';

class DataEntry extends Component {

    constructor() {
      super();
      this.state = {'newValue': '', 'showTopicModal': false};
    }

    createNewValue(e) {
      e.preventDefault();

      const userInput = this.state.newValue;
      if (userInput === "" || isNaN(userInput)) {

      } else {
        const newValueObject = {
            time: new Date(),
            value: this.state.newValue
        };
        this.props.createNewValue(this.props.currentMapping, newValueObject);
      }
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

    toggleHover = () => this.setState({ hoverHeading: !this.state.hoverHeading });

    toggleCategoryModal() {
      if (this.state.hoverHeading) {
        this.setState({ showTopicModal: true });
      } else {
        this.setState({ showTopicModal: false });
      }
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
                height: '100%'
            }
        }

        const data = this.props.timeValueData;
        const tableOfPast = data.map((row, i) => 
          <tr key={i} className="warning">
              <td><p>{this.formatTime(row.time)}</p></td>
              <td>{row.value}</td>
          </tr>
        );

        if(this.state.hoverHeading) {
          style.heading['textDecoration'] = 'underline';
          style.heading['cursor'] = 'pointer';
        }

        return (
            <div style={style.container}>
              <h2 style={style.heading} onClick={this.toggleCategoryModal.bind(this)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.props.currentMapping}</h2>
              <form onSubmit={this.createNewValue.bind(this)} style={style.inputContainer}>
                  <input type="text" className="form-control" value={this.state.newValue} onChange={this.handleInputValue.bind(this)}/>
                  <button type="submit" className="btn btn-success" style={style.submitButton}>Submit</button>   
              </form>
              <table style={style.table} className="table table-bordered table-hover">
                <thead>
                  <tr className="warning">    
                    <th>Time</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {tableOfPast}
                </tbody>
              </table>

              { this.state.showTopicModal ? <EditMapTimeCategory toggleShow={this.toggleCategoryModal.bind(this)}/> : null }; 
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