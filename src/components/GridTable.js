import React from 'react';
import './Styles/gridTable.css';
import { Link } from "react-router-dom";

class GridTable extends React.Component {


    defaultClick(itemData){
        console.log("default Handler")
        console.log(itemData)
        if(this.props.itemClick != null && typeof(this.props.itemClick) === "function"){
            this.props.itemClick(itemData)
        }

    }
    

    render() {
        var response = this.props.tableData
        var columnHeaders = response.headers 
        var clickKey = ""
        if(columnHeaders.includes(this.props.clickKey)){
            clickKey =  this.props.clickKey           
        }
        else{
            clickKey = columnHeaders[0]
        }

        var data = response.data
        var myStyle = {
            gridTemplateColumns: 'repeat('+(columnHeaders.length - 1)+', auto)',
        };

        return (
            <div className="gridTable_Root" style={myStyle}>
                {
                    columnHeaders.map(header=>{
                        if(header!=='id'){
                            return <div key={header} className="gridTable_HeaderCell">{header}</div>
                        }
                        return null
                    })
                }
                {
                    data[columnHeaders[0]].map((id, index)=>{
                        let elements = []
                        columnHeaders.map(key=>{
                            if(key!=='id'){
                                elements.push(<div key={key+'_'+index} onClick={()=>{this.defaultClick(data[clickKey][index])}} className="gridTable_DataCell">{data[key][index]}</div>)
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