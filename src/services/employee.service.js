import http from "../http-common";


class EmployeeService{
   
   
    getEmployee(id){
        console.log("service get call ");
      return http.get('/employee/'+id);
    }

    createNewEmployee(data){
        console.log("Post sent!!");
        return http.post("/employee",data);
    }

    updateEmployee(id,data){
        return http.put("/employee/"+id,data);
    }

    deleteEmployee(id){
        return http.delete("/employee/"+id);
    }
}

export default new EmployeeService();