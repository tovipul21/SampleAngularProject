import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEmployee } from "./employee";
import { employeeListDataModule } from "./employeedata";

@Component({
    selector: 'employee-detail',
    templateUrl: './employeedetail.component.html'
})

export class EmployeeDetailComponent {
    pageTitle = 'Employee Detail Page';
    public employeeObject: IEmployee | undefined;
    
    public employeeListDataObject: Array<IEmployee> | undefined;
    public dataModule = new employeeListDataModule;

    constructor (private route: ActivatedRoute){}

    ngOnInit(): void{
        const empId = Number(this.route.snapshot.paramMap.get('id'));

        this.employeeObject = this.dataModule?.myEmployees.find(employee => employee.employeeId = empId);
        
        this.pageTitle += ' - ' + this.employeeObject?.employeeName + " - " + this.employeeObject?.employeeId;
    }
}
