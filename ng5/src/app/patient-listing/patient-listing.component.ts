import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Http } from '@angular/http';
import { PatientListingService} from '../services/patient-listing.service';
import { Router } from '@angular/router';
import { UserData } from './UserData';
import { AuthenticateService } from '../services/authenticate.service';
import { CookieService } from 'angular2-cookie/core';



@Component({
  selector: 'app-patient-listing',
  templateUrl: './patient-listing.component.html',
  styleUrls: ['./patient-listing.component.css']
})
export class PatientListingComponent implements OnInit { 
  // result :any;
  displayedColumns: string[] = ['lastName','hillromId', 'dob', 'city','lastTransmissionDate','clinicNamesCSV','adherence'];
  patientList: UserData[];
  patientLists: UserData = new UserData();
  responseData: any;
  token: any;
 
  dataSource: MatTableDataSource<UserData>;
  // dataSource :any;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  constructor(private patient: PatientListingService, private authenticate: AuthenticateService, private _cookieService:CookieService) { 
    console.log("cookie value:username", this._cookieService.get('userName'));
    console.log("cookie value:password", this._cookieService.get('password'));
    var username = this._cookieService.get('userName').slice(1,-1); //admin@localhost.com
    var password = this._cookieService.get('password').slice(1,-1);// ""Datavis@123""
    console.log("cookie value:username", username);
    console.log("cookie value:password", password);
    this.authenticate.authenticateUser(username, password).subscribe((result) =>{
      console.log("sfghdghsgj",result);
      this.responseData = result;
      console.log ("is it taking2354245",this.responseData.id);
      // localStorage.setItem('logged', this.responseData.id);
      // console.log ("is it taking",localStorage.setItem('logged', this.responseData.id));
      this.patient.getPatientDetails(this.responseData.id).subscribe((result) =>{
        console.log ("are we passing", this.responseData.id);
      console.log("Data", result);
      this.patientList = result;
      this.patientList.forEach(patientDetail => {
        console.log(patientDetail.email);
        if(patientDetail.lastTransmissionDate == null){
              patientDetail.adherence = "N/A";
        }
        // console.log(this.dataSource.filter);
      });
      console.log("patientData", this.patientList);
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.patientList);
     console.log("patientDatagsfgfsg", this.dataSource);
    })
    })

    
  }

  ngOnInit() {
        
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(filterValue);
  // }

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
 
 }

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const patient_name =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   const clinic_name =
//       CLINICNAMES[Math.round(Math.random() * (CLINICNAMES.length - 1))] + ' ' +
//       CLINICNAMES[Math.round(Math.random() * (CLINICNAMES.length - 1))].charAt(0) + '.';

//   // return {
//   //   // id: id.toString(),
//   //   // patient_name: patient_name,
//   //   // hillrom_id: Math.round(Math.random() * 100).toString(),
//   //   // dob: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
//   //   // city_state:CITY[Math.round(Math.random() * (COLORS.length - 1))],
//   //   // transmission:Math.round(Math.random() * 100).toString(),
//   //   // clinic_name:clinic_name,
//   //   // adherence: Math.round(Math.random() * 100).toString(),
//   // };
 
