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
        if(this.props.location.search === ""){
          this.props.history.push('/');
        }
        let endpoint = config.baseUrl+'fetchColumn'+this.props.location.search;
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
          <h2 className="pageHead">COLUMNS</h2>
          
          {table}
        </div>
      );
    }
  };
export default Column;