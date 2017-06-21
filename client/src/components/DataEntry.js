import React, { Component } from  "react";

const tempData = [
    {date: "1", mass: "10"},
    {date: "2", mass: "12"},
    {date: "3", mass: "11"},
    {date: "4", mass: "14"},
    {date: "5", mass: "13"},
    {date: "6", mass: "11"},
    {date: "7", mass: "15"},
    {date: "8", mass: "18"}
];

class DataEntry extends Component {



    render() {

        const tableOfPast = tempData.map((row, i) => 
            <tr key={i}>
                <td>row.date</td>
                <td>row.mass</td>
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