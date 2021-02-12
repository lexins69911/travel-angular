import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/auth.service';
import { INVALID_LOGIN_STATUS, TokenStorageService, TOKEN_HEADER } from 'src/app/token-storage.service';

@Component({
  selector: 'app-login.w-50.ml-auto.mr-auto"',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    username: '',
    password: ''
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private token: TokenStorageService,
    private router: Router,
    private toastr: NbToastrService
  ) { }

  login() {
    return this.auth.login(this.form.value.username, this.form.value.password)
      .subscribe((response: HttpResponse<any>) => {
        const token = response.headers.get(TOKEN_HEADER);

        if (response.status === INVALID_LOGIN_STATUS || !token) {
          this.toastr.danger('Неправильный логин/пароль', 'Не удалось войти');

          return;
        }

        this.token.saveToken(token);
        this.auth.addCredentional(token);

        setTimeout(() => {
          this.router.navigate(['/'])
        }, 300);
      })
  }
}
