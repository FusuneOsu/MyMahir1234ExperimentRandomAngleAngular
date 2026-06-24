import { Component, ɵɵdeferPrefetchOnViewport } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Router } from '@angular/router';
import { Ui } from '../../services/ui';
import { Data } from '../../services/data';


@Component({
  selector: 'app-login',
  imports: [...SharedModules],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public loginForm: FormGroup;
  public signupForm: FormGroup;
  public showPassword: boolean = false;
  public showPassword2: boolean = false;
  public showRegisterForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: Api,
    private router: Router,
    private uiService: Ui,
    private dataService: Data
  ){
    // reactive form definitions created using Angular's FormBuilder
    // The empty [''] is the initial/default value for each form control when the form first loads.
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // email field: Required and must be a valid email format
      password: ['', [Validators.required]] // password field: Required
    });
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required], // name: Required
      phone: [''], // phone: Optional (no validators)
      email: ['', [Validators.required, Validators.email]], // email: Required and valid email format
      password: ['', [Validators.required]], // password: Required
      confirm_password: ['', [Validators.required]] // confirm_password: Required
    })
  }

  onShowPassword(){
    this.showPassword = !this.showPassword
  }

  // this other one is for "Confirm Password" field
  onshowPassword2(){
    this.showPassword2 = !this.showPassword2
  }

  onShowRegisterForm(){
    this.showRegisterForm = !this.showRegisterForm;
    
    //clears form when user changes between Sign In and Sign Up
    this.loginForm.setValue({
      email: '',
      password: '',
    })

    this.signupForm.setValue({
      name: '',
      phone: '',
      email: '',
      password: '',
      confirm_password: ''
    })
  }

  async onSubmit(){
    // Starts by assuming it's a login submission (gets email + password).
    let submitData = this.loginForm.value;

    try{
      // // SIGNUP PATH
      if(this.showRegisterForm){
        submitData = this.signupForm.value; // Gets signup form data (name, email, password, confirm_password, phone)
        const response: any = await this.apiService.httpPost('/auth/register', submitData) // Sends it to /auth/register endpoint

        // Validates passwords match before proceeding
        if(submitData.password != submitData.confirm_password){
          this.uiService.openSnackBar('Password and confirmed password do not match','OK');
          return;
        }

        // If registration successful, shows success message and switches back to login form
        if(response.success){
          this.uiService.openSnackBar('Registration Successful','OK')
          this.onShowRegisterForm();
        }

      } else { // // LOGIN PATH
        const response: any = await this.apiService.httpPost('/auth/login', submitData) // Sends login credentials to /auth/login

        // If successful: saves token & user, redirects to reports page
        if(response.success){
          let token = response.token;
          //save token function
          this.dataService.saveStorage('TOKEN',token);
          this.dataService.saveStorage('USER', response.user);

          this.router.navigateByUrl('/reports');
        } else {
          // If failed: shows error message
          this.uiService.openSnackBar('Invalid email or password','OK')
        }
      }

    // Catches any network or unexpected errors and displays them
    }catch(err: any) {
      this.uiService.openSnackBar('An error occured'+ err.message ,'OK')
    }
  }
}
