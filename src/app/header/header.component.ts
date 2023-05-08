import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }
  logout() {
    this._auth.clearStorage()
    this._router.navigate(['']);
  }

}
