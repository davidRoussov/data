import React, { Component } from  "react";

class DataEntry extends Component {

    render() {

        const tableOfPast = this.props.massHistory.map((row, i) => 
            <tr key={i}>
                <td>{row.date}</td>
                <td>{row.mass}</td>
            </tr>
        );

        return (
            <div>
                <table className="table table-striped table-hover">
                    <tbody>
                        {tableOfPast}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataEntry;