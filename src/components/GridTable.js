import React from 'react';
import './Styles/gridTable.css';

class GridTable extends React.Component {

    

    render() {
        var response = this.props.tableData
        var columnHeaders = response.headers 
        var data = response.data
        var myStyle = {
            gridTemplateColumns: 'repeat('+(columnHeaders.length - 1)+', auto)',
        };

        return (
            <div class="gridTable_Root" style={myStyle}>
                {
                    columnHeaders.map(header=>{
                        if(header!=='id'){
                            return <div className="gridTable_HeaderCell">{header}</div>
                        }
                        return null
                    })
                }
                {
                    data[columnHeaders[0]].map((id, index)=>{
                        let elements = []
                        columnHeaders.map(key=>{
                            if(key!=='id'){
                                elements.push(<div className="gridTable_DataCell">{data[key][index]}</div>)
                            }
                            return null
                        })
                        return elements
                    })
                }
            </div>
        );
    }
  };

export default GridTable;