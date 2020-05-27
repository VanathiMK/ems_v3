import React,{Component} from 'react';
import Employee from './Employee.component.js';
import EmployeeService from '../services/employee.service.js';
import IDFormHeader from  './GetIdFromUser.js'
class ReadEmployee extends Component{
    constructor(props){
        super(props);

        this.state={
            id:"",
            errorMessage:"",
            Message:"",
            isEmployeeAvailable:false,
            EmployeeData:null
        };
        
       
    }
  //This method is called from Child Component(Employee), mainly to share the employee details 
    setData(emp,error){
        if(emp!=null){
            this.setState({
                isEmployeeAvailable:true,
                EmployeeData:emp
            });
        }else {
            this.setState({
                isEmployeeAvailable:false,
                errorMessage:"Employee not found. Please try a different id"
            });
        }
    }
    render(){
        let alert;
        if(this.state.errorMessage&&this.state.errorMessage.length){
            alert=<div>
                <div className="alert alert-danger" role="alert">
                <h5 className="alert-heading">Error from db</h5>  
                <p>{this.state.errorMessage}</p>
                </div>
            </div>
        }else if(this.state.Message&&this.state.Message.length){
            alert=<div>
            <div className="alert alert-success" role="alert">
            <h5 className="alert-heading">Success</h5>  
            <p>{this.state.Message}</p>
            </div>
        </div>
        }else
        alert=<div></div>

 
        return(
            <div>
                <h4 className="pull-left pad botBorder">Read Existing Employee</h4>
               <IDFormHeader setEmpOrError={this.setData.bind(this)}></IDFormHeader>
                {this.state.isEmployeeAvailable?(
                    <div>
                        <Employee empData={this.state.EmployeeData} oper="Read"></Employee>
                    </div>
                ):alert}
            </div>
        );
    }
}

export default ReadEmployee;