import React,{Component} from 'react';
import Employee from './Employee.component.js';
import EmployeeService from '../services/employee.service.js'


class IDFormHeader extends Component{
    constructor(props){
        super(props);

        this.state={
            id:"",
            idError:"",
            errorMessage:"",
          };
        this.onChangeID=this.onChangeID.bind(this);
        this.getEmployee=this.getEmployee.bind(this);
        this.isValidID=this.isValidID.bind(this);
    }
    onChangeID(e){
        this.setState({
                id:  e.target.value
                  });
    }
    isValidID(){
        //Clear previous error
        this.setState({
            idError:""
        });

        if(isNaN(this.state.id)){
            this.setState({
                idError:"Please enter numeric value"
            });
            return false;
        }
        return true;
    }
    getEmployee(){
        if(!this.isValidID())
            return;
        EmployeeService.getEmployee(this.state.id).then(response=>{
            console.log("Get request successful " + response.data.message);
            const recEmployee = response.data.emp;
                //Calling parent method or sending the data to parent
                this.props.setEmpOrError(recEmployee,null);
            
        }).catch(error=>{
            console.log("getEmployee returned error "+error);
            this.props.setEmpOrError(null,error);
        });
    }
    render(){
        return(
            <div className="container">
                <div className="form-group row">
                    <div className="col-sm-4 ">
                    <input type="text" className="form-control" id="empIdText" placeholder="Enter Employee id" name="empId" onChange={this.onChangeID} value={this.state.id}></input>
                    <small style={{color:"red"}}>{this.state.idError}</small>
                    </div>
                    <div className="col-sm-3">
                    <button  className="btn btn-secondary" onClick={this.getEmployee} >Read</button>
                    </div>
                </div>
                            
                       
            </div>
        )
    }
}

export default IDFormHeader;