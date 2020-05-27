
import  { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, { Component } from 'react';

import AddEmployee from "./components/AddEmployee.js";
import ReadEmployee from "./components/ReadEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

class App extends Component {
  constructor(props){

    super(props);
    this.setOperation = this.setOperation.bind(this);


    this.state={
      operation:""
    };

  }
 
  setOperation(e){
    this.setState({
      operation:e.target.value
    });

  }
  render(){
  return (
    <Router>
    <div className="container containerbg customColor" >
      <div >
     <h3 class="text-center pad"> Employee Management</h3>
     <h6 class="text-center customColor2 pad"> Open book assignment submitted by VanathiMK</h6>
     </div>
        <div className="row pb-5">
          <div className="col-md 3 pad">
          <div className="col-md-3 pad">
              <Link to={"/Add"}><button id="add" className="btn btn-primary customButton">
                Create</button></Link>
           </div>   
           <div className="col-md-3 pad " >    
             <Link to={"/Read"}> <button id="readMain" className="btn btn-primary customButton">Read  </button></Link>
             </div>
             <div className="col-md-2 pad">  
              <Link to={"/Update"}> <button id="upd" className="btn btn-primary customButton">Update</button></Link>
              </div>
              <div className="col-md-2 pad"> 
              <Link to={"/Delete"}> <button id="del" name="del" className="btn btn-primary customButton">Delete</button></Link>
           </div>
           <div className="col-md-2">
           </div>
           </div>

      {//  <Header currentOper={this.state.operation}></Header>
  }
          <div className="col-md-9">
          <Switch>
              <Route exact path="/Add" component={AddEmployee} />
              <Route exact path="/Read" component={ReadEmployee} />
              <Route exact path="/Update" component={UpdateEmployee} />
              <Route exact path="/Delete" component={DeleteEmployee} />
            </Switch>
          </div>
          
        </div>

    </div>
    </Router>

  );
  }
}
App.defaultProps={
  //operation: ""
}
export default App;
