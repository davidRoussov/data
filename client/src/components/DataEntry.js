import React, { Component } from  "react";

class DataEntry extends Component {

    constructor() {
        super();
        this.state = {['newValue']: ''};
    }

    createNewValue(e) {
        e.preventDefault();
        console.log(this.state.newValue); 
    }

    handleInputValue(e) {
        this.setState({ newValue: e.target.value });
    }

    render() {

        const inputContainerStyle = {
            padding: "10px"
        };

        const submitButtonStyle = {
            marginTop: "8px",
            width: "100%"
        }

        const data = this.props.timeValueData; 
        const tableOfPast = data.map((row, i) => 
          <tr key={i}>
              <td>{row.time.toString()}</td>
              <td>{row.value}</td>
          </tr>
        );

        return (
            <div>
                <form onSubmit={this.createNewValue.bind(this)} style={inputContainerStyle}>
                    <input type="text" className="form-control" value={this.state.newValue} onChange={this.handleInputValue.bind(this)}/>
                    <button type="submit" className="btn btn-primary" style={submitButtonStyle}>Submit</button>   
                </form>
                <table className="table table-bordered table-hover">
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

export default DataEntry;