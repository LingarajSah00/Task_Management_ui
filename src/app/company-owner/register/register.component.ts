import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyOwnerService } from '../service/company-owner.service';
import {AlertService} from '../../shared-component/service/alert.service';
import { Registration } from '../model/registration';

// @ts-ignore
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  , providers: [CompanyOwnerService]
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  user:Registration=new Registration;
  isValidFormSubmitted = false;
  submitted = false;

 constructor(private router: Router, private formbuilder: FormBuilder, private userService: CompanyOwnerService, private  alertService: AlertService) { }

 ngOnInit() {

   this.registerForm = this.formbuilder.group({
     username: ['', Validators.compose([ Validators.required, Validators.minLength(4)])],
     password: ['', Validators.compose([ Validators.required, Validators.minLength(4)])],
     // repassword:['',Validators.required],
     
     
    
       

   });
 }

 onSubmit() {

   console.log(this.registerForm.value);
   this.user=this.registerForm.value;
   this.user.userType='SUPERADMIN';
   this.user.enabled=true;

   this.submitted = true;
   
   this.createCompanyOwner();

 }
  reset

  createCompanyOwner() {
    this.userService.createUser(this.user)
      .subscribe(data => {
          this.alertService.success('Register Sucessful' , true);
          console.log(data);
          console.log('before router the url ');
          this.registerForm.reset();
         // this.router.navigate(['/owner/temp']);

        }, err => {

          console.log(err);
          // alert('problem');

          // this.messageService.error(error);

        }

      );
  }

  // reloadPage(); {
  //   window.location.reload();
  // }

}
