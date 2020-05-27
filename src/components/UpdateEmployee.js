import React,{Component} from 'react';
import Employee from './Employee.component.js';
import IDFormHeader from  './GetIdFromUser.js'
import employeeService from '../services/employee.service.js';

class UpdateEmployee extends Component{

    constructor(props){
        super(props);

        this.state={
            id:"",
            errorMessage:"",
            Message:"",
            isEmployeeAvailable:false,
            EmployeeData:null
        };
        
      this.updateEmployee=this.updateEmployee.bind(this) ;
      this.clearPrevAlert=this.clearPrevAlert.bind(this);
    }
    setData(emp,error){
        if(emp!=null){
            this.setState({
                isEmployeeAvailable:true,
                id:emp.id,
                EmployeeData:emp
            });
        }else {
            this.setState({
                isEmployeeAvailable:false,
                errorMessage:"Error received " + error
            });
        }
    }

    clearPrevAlert(){
        this.setState({
            errorMessage:"",
            Message:""
        });
    }
  async  updateEmployee(data){
      this.clearPrevAlert();
      console.log("Inside update");
      let id=this.state.id;  
      let newData=data;
    await employeeService.updateEmployee(id,newData).then(response=>{
        console.log("response received updated!!!" + response.data.message);
        if(response.data.message=="Success"){
            this.setState({
                isEmployeeAvailable:false,
                Message:"Employee updated successfully!! Hit Read to see the update!!!"
            });}
        else{
            this.setState({
                errorMessage:response.error
            });
        }
        
    }).catch(error=>{
        console.log(" " +error);
    });
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
                <h4 className="pull-left pad botBorder">Update Existing Employee</h4>
                <IDFormHeader setEmpOrError={this.setData.bind(this)}></IDFormHeader>

                
{//Add the Employee form if employee is returned in prrevious get call
}
                {this.state.isEmployeeAvailable?(
                    <div>
                        <Employee empData={this.state.EmployeeData} updateMethod={this.updateEmployee.bind(this)} oper="Update"></Employee>
                        
                    </div>
                ):alert}

            </div>
        );
    }
}

export default UpdateEmployee;