import React, { Component } from  "react";

class DataEntry extends Component {

    render() {

        const data = (this.props && this.props.timeValueData) ? this.props.timeValueData : [];

        const tableOfPast = data.map((row, i) => 
            <tr key={i}>
                <td>{row.date.split("T")[0]}</td>
                <td>{row.mass}</td>
            </tr>
        );

        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>    
                            <th>Date</th>
                            <th>Mass</th>
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