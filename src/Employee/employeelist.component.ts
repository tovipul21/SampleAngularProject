import { Component } from "@angular/core";
import { IEmployee } from "./employee";
import { employeeListDataModule } from "./employeedata";

@Component({
    selector: 'employee-list',
    templateUrl: './employeelist.component.html'
})

export class EmployeeListComponent {
    pageTitle = 'Hey this is Sample Angular Project';

    private employeeDataModule = new employeeListDataModule();
    public employeeList : Array<IEmployee> | undefined;
    
    ngOnInit(): void{
        this.employeeList = this.employeeDataModule?.myEmployees;
    } 
}
