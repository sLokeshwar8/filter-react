import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';



class App extends Component {
  state = {
    namefilter : false,
    dobfilter : false
  }
  namefilterHandler = (e) => {
    this.setState({namefilter: e})
    this.setState({dobfilter: false})
  }
  dobfilterHandler = (e) => {
    this.setState({namefilter: false})
    this.setState({dobfilter: e})
  }
  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter 
          namefilter={this.namefilterHandler} 
          dobfilter={this.dobfilterHandler}
          namefilterStatus={this.state.namefilter}
          dobfilterStatus={this.state.dobfilter}
          ></Filter>
        <RecordTable
          namefilter={this.state.namefilter}
          dobfilter={this.state.dobfilter} ></RecordTable>
      </div>
    );
  }
}

export default App;
