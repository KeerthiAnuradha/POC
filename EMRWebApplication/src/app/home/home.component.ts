import { Component, OnInit } from '@angular/core';
import { EmrLists } from './EmrLists';
import { Router } from '@angular/router';
import { Hl7Config } from './Hl7Config';
import { AlertsService } from 'angular-alert-module';
import { enableDebugTools } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    emrlist: EmrLists[];
    emrlists: EmrLists = new EmrLists();
    configlistDetails: Hl7Config[];
    configlistDetail: Hl7Config = new Hl7Config();
    hl7Version: string = "2.5.1";

    tempEmrItem: EmrLists;
    configlist: Hl7Config[];
    configitem: Hl7Config;
    tempConfigItem: Hl7Config;
    popupHeaderMessage: string;
    isAddbutton: boolean;
    buttonDisabled: boolean;
    noSelected: number;
    isPrimaryRecord: boolean;
    selectEmrList: EmrLists[] = new Array();
    isDisabledState: boolean = true;
    checkDisable: boolean;
    activeDisable: boolean;
    selectedConfig: Hl7Config;



    constructor(private router: Router, private alerts: AlertsService, private home: HomeService) {

        this.clearAddpopup();
        this.configitem = Object();
        this.buttonDisabled = true;
        this.checkDisable = true;
        this.noSelected = 0;
        this.isPrimaryRecord = false;
        this.ngOnInit();
    }

    ngOnInit(): void {
        // this.alerts.setDefaults('timeout',0);
        this.home.getEmrDetails().subscribe((result: EmrLists[]) => {
            console.log("Data", result);
            this.emrlist = result;
            console.log("Data", result);

        },
            (error) => {
                console.error(error);
            });
        this.clearAddpopup();
        this.configitem = Object();
        this.buttonDisabled = true;
        this.noSelected = 0;
        this.checkDisable = true;
        this.isPrimaryRecord = false;
    }
    addnewEMR(): void {
        if (this.emrlists.title == undefined && this.emrlists.host == undefined && this.emrlists.port == undefined) {
            this.alerts.setMessage('All the fields are required', 'error');
            return;
        }
        this.home.addnewEMR(this.emrlists)
            .subscribe(data => {
                this.alerts.setMessage('Configurations saved successfully!', 'success');
                this.ngOnInit();
            },
                (error) => {
                    console.error(error);
                    this.alerts.setMessage('Error while saving record', 'error');
                });
        debugger;
        this.emrlist.forEach(emr => {
            if (emr.isPrimary == true) {
                this.emrlist.forEach((emr, index) => {
                    if (emr.host == this.emrlists.host) {
                        emr.isPrimary = true;
                    }
                    else {
                        emr.isPrimary = false;
                    }
                });
                debugger;
            }
        });
        this.clearAddpopup();
    };

    deleteEMR(): void {
        this.selectEmrList.forEach(emr => {
            this.home.deleteEMR(emr)
                .subscribe(data => {
                    this.emrlist = this.emrlist.filter(this.checkForValidDelete);
                    this.ngOnInit();
                })
        })
        this.alerts.setMessage('deleted successfully!', 'success');
        this.ngOnInit();
    };

    onPrimarySelectionChange(data) {
        this.emrlist.forEach((emr, index) => {
            if (emr.host == data.host) {
                emr.isPrimary = true;
            }
            else {
                emr.isPrimary = false;
            }
        });
    }
    clearAddpopup() {
        this.emrlists = new EmrLists();
        this.popupHeaderMessage = "Add New EMR";
        this.isAddbutton = true;
    }
    logoutFunction() {
        this.router.navigate(['']);
        this.alerts.setMessage('OOPS! you are logged off', 'warn');
    }
    onActiveSelectionChange(data) {
        debugger
        console.log(data);
        if (!data.isActive) {
            data.isPrimary = false;
            this.checkDisable = true;
        }
        else {
            this.checkDisable = false;
        }
    }
    onCheckboxSelectionChange(data) {
        console.log(data);
        this.buttonDisabled = false;
        var enableFlag = false;
        if (data.selected) {
            this.selectEmrList.push(data);
            if (data.isPrimary == true) {
                this.isPrimaryRecord = true;
            }
            this.noSelected++;
        }
        else {
            this.selectEmrList.splice(this.selectEmrList.indexOf(data), 1);
            if (data.isPrimary == true) {
                this.isPrimaryRecord = false;
            }
            if (this.noSelected) {
                this.noSelected--;
            }
        }
        console.log(" this.selectEmrList", this.selectEmrList);

        this.emrlist.forEach((emr, index) => {
            if (emr.host == data.ipAddress && emr.isPrimary == true && emr.configId == 0) {
                emr.configId = 0;
            }
        });
        this.enable();
        console.log(this.emrlist);
    }
    enable() {
        this.buttonDisabled = false;
        if (this.noSelected) {
            if (this.isPrimaryRecord) {
                this.buttonDisabled = true;
            }
        }
        else {
            this.buttonDisabled = true;
        }
    }

    // local function for multi condition check for filter
    checkForValidDelete(value, index, ar) {
        if (value.selected == true && value.isPrimary == false) {
            return false;
        }
        else {
            return true;
        }
    }

    editClickEvent(data) {
        console.log(data);
        this.popupHeaderMessage = "Edit EMR";
        this.emrlists = Object.assign({}, data);
        if (this.emrlists.isActive === true) {
            this.checkDisable = false;
        }
        else {
            this.checkDisable = true;
        }
        this.isAddbutton = false;
    }
    editConfigClickEvent(data) {
        console.log(data);
        this.popupHeaderMessage = "HL7 Config Details";
        this.tempConfigItem = data;
        this.home.getHL7Details().subscribe((result: Hl7Config[]) => {
            console.log("hl7", result);
            debugger;
            this.configlistDetails = result;
            console.log("hl7", result);
            this.configlistDetails.forEach((config) => {
                config.version = "2.5.1";
                console.log(config.selected);
                if (config.selected === true) {
                    this.selectedConfig = config;
                }
            })

            console.log("Display");
            console.log(this.configlistDetails);
        },
            (error) => {
                console.error(error);
            });
    }

    // edit 
    cancelEditOption() {
        this.alerts.setMessage('Changes are not saved!', 'warn');
    }
    resetConfigOption() {
        debugger;
        this.alerts.setMessage('Changes are not saved!', 'warn');
    }

    saveEditChanges(emrlists) {
        debugger;
        console.log(emrlists);
        console.log("edit changes");
        this.home.updateDetails(emrlists).subscribe((result) => {
            this.ngOnInit();
            this.alerts.setMessage('Changes saved successfully!', 'success');
        }, (error) => { })
    }

    saveConfigChanges(configlistDetail) {
        debugger;
        console.log("edit changes", configlistDetail);
        this.home.updateHL7Details(configlistDetail).subscribe((result) => {
            this.alerts.setMessage('Changes saved successfully!', 'success');
        }, (error) => { })
    }

}