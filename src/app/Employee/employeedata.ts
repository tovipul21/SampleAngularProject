import { IEmployee } from "./employee";

export class employeeListDataModule{

    myEmployees:IEmployee[] = 
    [
      {
        employeeId : 1,
        employeeName : 'Vipul Mehta',
        employeeDesignation: 'App Development Manager',
        salary: 2000,
        employeeCode: "ORH-87RF7",
        performanceRating: 3.8

      },
      {
        employeeId : 2,
        employeeName : 'Zarna Mehta',
        employeeDesignation: 'Cloud Migration Manager',
        salary: 3500,
        employeeCode: "TFV-85RF2",
        performanceRating: 4.9
      },
      {
        employeeId : 3,
        employeeName : 'Kanishk Mehta',
        employeeDesignation: 'Sr Analyst',
        salary: 4200,
        employeeCode: "TVF-15RF9",
        performanceRating: 4.1
      },
      {
        employeeId : 4,
        employeeName : 'Diyaan Mehta',
        employeeDesignation: 'Team Lead',
        salary: 8952.52,
        employeeCode: "KGF-74RF0",
        performanceRating: 3.9
      },
      {
        employeeId : 5,
        employeeName : 'Tim Jones',
        employeeDesignation: 'Tech Arch',
        salary: 7485.00,
        employeeCode: "AND-21AB2",
        performanceRating: 4.8
      }
    ]
  }