import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/auth-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  userLogin: AuthLoginInfo;

  loginForm: FormGroup;
  submitted = false;
  @Input() loginType: any;

  constructor(private router: Router,private formBuilder:  FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {

    this.userLogin= new AuthLoginInfo()

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.loginType);
    console.log(this.loginForm.value);

    if (this.loginType === 'SUPERADMIN') {

      this.userLogin=this.loginForm.value;
      this.userLogin.userType=this.loginType;

      this.authService.attemptAuth(this.userLogin).subscribe(
        data => {
          console.log('hh')
          //this.tokenStorage.saveToken(data.token);
           //this.tokenStorage.saveUsername(data.username);
          // this.tokenStorage.saveAuthorities(data.authorities);
          // localStorage.setItem('token',JSON.stringify(data.));


          console.log(data);
          // this.reloadPage();
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);

        }
      );

    }
  }
    reloadPage() {
      window.location.reload();
    }
  }
