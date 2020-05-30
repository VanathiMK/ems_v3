import Axios from "axios";
export default Axios.create({
   baseURL:"http://localhost:2000/ems",
   headers:{
       "Content-type":"application/json"
   }
});