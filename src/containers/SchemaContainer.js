import React from 'react';
import GridTable from '../components/GridTable'
import config from'../config' 
import Header from '../components/Header';

class Schema extends React.Component {
    constructor(props){
      super(props)
      this.state={
        data : {}
      }
    }

    componentDidMount(){
      //Making the api call to fetch data.
      //Hard coding value for now, Needs to be wired properly
      let endpoint = config.baseUrl+'fetchSchema?item_id=1';
      fetch(endpoint)
        .then((response)=>{
          return response.json();
        })
        .then((jsonResp)=>{
          //Response Received
          this.setState({data:Object.assign({},jsonResp)})
        })

    }

    clickHandler = (data) => {
      console.log("Handler called")
      console.log(data)
      let nextLink = 'table?item_id='+data
      this.props.history.push(nextLink);
    }

    render() {
      let table = null
        if(Object.keys(this.state.data).length !== 0){
          table = <GridTable tableData={this.state.data} clickKey='id' itemClick={this.clickHandler.bind(this)}/>
        }
      
      return (
        <div>
          <Header/>
          <h2 className="pageHead">SCHEMAS</h2>
          
          {table}
        </div>
      );
    }
  };
export default Schema;