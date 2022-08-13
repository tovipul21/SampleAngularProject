import { IEmployee } from "./employee";

export class employeeListDataModule{

    myEmployees:IEmployee[] = 
    [
      {
        employeeId : 1,
        employeeName : 'Vipul Mehta',
        employeeDesignation: 'App Development Manager',
        salary: 2000,
        employeeCode: "ORH-87RF7"

      },
      {
        employeeId : 2,
        employeeName : 'Zarna Mehta',
        employeeDesignation: 'Cloud Migration Manager',
        salary: 3500,
        employeeCode: "TFV-85RF2"
      },
      {
        employeeId : 3,
        employeeName : 'Kanishk Mehta',
        employeeDesignation: 'Sr Analyst',
        salary: 4200,
        employeeCode: "TVF-15RF9"
      },
      {
        employeeId : 4,
        employeeName : 'Diyaan Mehta',
        employeeDesignation: 'Team Lead',
        salary: 8952.52,
        employeeCode: "KGF-74RF0"
      }
    ]
  }