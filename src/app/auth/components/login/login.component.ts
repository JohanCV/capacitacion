import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.isUserLogin();
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    console.log('dentro del ng');
    this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
      console.log('dentro del onSubmit');
      if (res.status) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['/courses']);
        console.log('dentro del status');
      } else {
        console.log('Error de Coneccion al Servicio');
      }
    })
  }
  isUserLogin() {
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }
  logout() {
    this._auth.clearStorage()
    this._router.navigate(['/']);
  }
}