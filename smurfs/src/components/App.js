import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getSmurfs } from '../store/actions/smurfActions'
import SmurfContainer from '../components/SmurfContainer'
import SmurfCard from '../components/SmurfCard'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {getSmurfs}) (App);
