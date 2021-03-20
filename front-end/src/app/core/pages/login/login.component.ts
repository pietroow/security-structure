import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroupLogin: FormGroup;
  loginUri: string = "/oauth/token";
  capslockOn: boolean;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._initFormGroup();
    this.tokenService.clearAccessToken();
    this._removeParamUrl();
  }

  login(): void {
    this.authService
      .login(this._getFormGroupValue().username, this._getFormGroupValue().password)
      .subscribe((res: any) => {
        this.loginBehavior(res.access_token);
      });
  }

  private _initFormGroup(): void {
    this.formGroupLogin = new FormGroup({
      username: new FormControl(this._getEmailByURL(), Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  private _getEmailByURL(): string {
    const email = this.activatedRoute.snapshot.queryParams[`email`];
    return email || '';
  }

  private _removeParamUrl(): void {
    this.router.navigate([], {
      queryParams: {
        email: undefined,
      },
      queryParamsHandling: 'merge',
    });
  }

  private _getFormGroupValue(): any {
    return this.formGroupLogin.value;
  }

  loginBehavior(accessToken: string): void {
    this.tokenService.saveToken(accessToken);
    this.router.navigate(['main']);
  }

}
