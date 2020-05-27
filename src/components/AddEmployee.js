import React,{Component} from "react";
import Employee from "./Employee.component.js";
class AddEmployee extends Component{

    render(){
        return(
            <div class="container">
                <h4 className="pull-left pad botBorder">Add new employee</h4>
               
             
                <Employee oper="Create"/>                                                                                                                           
            </div>
        );
    }
}
export default AddEmployee;