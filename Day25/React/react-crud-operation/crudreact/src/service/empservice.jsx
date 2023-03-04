import axios from "axios";


const EMPLOYEE_API_BASE_URL = "http://localhost:8085/api/v1/employees";

export class EmployeeService{


  createEmployee(employee){
      return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }


}

export default new EmployeeService()
           