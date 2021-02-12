import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register.w-50.ml-auto.mr-auto',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    login: '',
    password: ''
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toastr: NbToastrService) { }

  register() {
    this.auth.registration(this.form.value.login, this.form.value.password).subscribe(() => {
      this.router.navigate(['../auth/login']);
    }, (error: HttpErrorResponse) => {
      this.toastr.danger(error.error)
    })
  }
}
