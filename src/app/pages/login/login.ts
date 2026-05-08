import { Component } from '@angular/core';
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
  public showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: Api,
    private router: Router,
    private uiService: Ui,
    private dataService: Data
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  onShowPassword(){
    this.showPassword = !this.showPassword
  }

  async onSubmit(){
    const loginData = this.loginForm.value;

    try{
      const response: any = await this.apiService.httpPost('/auth/login', loginData)

      if(response.success){
        let token = response.token;
        //save token function
        this.dataService.saveStorage('TOKEN',token);
        this.dataService.saveStorage('USER', response.user);

        this.router.navigateByUrl('/reports')
      }else {
        this.uiService.openSnackBar('Invalid email or password','OK')
      }

    }catch(err: any) {
      this.uiService.openSnackBar('An error occured'+ err.message ,'OK')
    }
  }
}
