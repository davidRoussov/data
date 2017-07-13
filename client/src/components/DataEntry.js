import React, { Component } from  "react";

class DataEntry extends Component {

    render() {

        const data = this.props.timeValueData; 

        const tableOfPast = data.map((row, i) => 
            <tr key={i}>
                <td>{row.time.split("T")[0]}</td>
                <td>{row.value}</td>
            </tr>
        );

        return (
            <div>
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