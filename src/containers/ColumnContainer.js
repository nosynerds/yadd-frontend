import React from 'react';
import GridTable from '../components/GridTable'
import config from'../config' 
import Header from '../components/Header';

class Column extends React.Component {
    constructor(props){
        super(props)
        this.state={
          data : {}
        }
      }

      componentDidMount(){
        //Making the api call to fetch data.
        let endpoint = config.baseUrl+'fetchColumn?item_id=1';
        fetch(endpoint)
          .then((response)=>{
            return response.json();
          })
          .then((jsonResp)=>{
            //Response Received
            this.setState({data:Object.assign({},jsonResp)})
          })
    
      }
    render() {
        let table = null
        if(Object.keys(this.state.data).length !== 0){
          table = <GridTable tableData={this.state.data}/>
        }
      return (
        <div>
          <Header/>
          <p></p>
          <br/>
          {table}
        </div>
      );
    }
  };
export default Column;