import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { employeeListDataModule } from "./employeedata";

@Component({
    selector: 'employee-list',
    templateUrl: './employeelist.component.html'
})

export class EmployeeListComponent implements OnInit{
    pageTitle = 'This is Employee List page';

    private employeeDataModule = new employeeListDataModule();
    public employeeList : Array<IEmployee> | undefined;
    private _listFilter: string = '';

    
    public get listFilter() : string {
        return this._listFilter;
    }
        
    public set listFilter(value : string) {
        this._listFilter = value;
        
        this.filteredEmployees = this.performFilter(value);
    }
    
    filteredEmployees: IEmployee[] = [];

    // Function that filters the data based on the input parametrs
    performFilter(filterBy : string) : IEmployee[]{

        filterBy = filterBy.toLocaleLowerCase();
        
        return this.employeeDataModule.myEmployees.filter((employee : IEmployee) => employee.employeeName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void{
        this.employeeList = this.employeeDataModule?.myEmployees;
        this.filteredEmployees = this.employeeDataModule?.myEmployees;
    } 
}
