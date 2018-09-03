import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public events: any[] = [];
  public submitted: boolean;
  public inValidUser: boolean;
  public errorMessage:string;

  constructor(private router: Router,
    private loginService: LoginService,
    public formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  validateLogin() {
    this.submitted = true;
    this.inValidUser = false;
    this.authService.loginDetails(this.myForm.value.username, this.myForm.value.password).subscribe(
      (result) => {
        console.log("result", result);
        if (result['username'] != undefined) {
          this.router.navigate(['/Home'])
        }
        else {
          this.inValidUser=true;
          this.errorMessage= "Invalies Username/Password";
        }
      },
      (error) => {
        debugger;
        console.error(error);
        this.inValidUser=true;
        this.inValidUser=true;
        this.errorMessage= "Internal server error";
      }
    );

    debugger;
  }
  ngOnInit() {
    this.clearLogin();
  }

  clearLogin() {
    debugger;
    this.myForm = this.formBuilder.group({
      username: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
  }
}