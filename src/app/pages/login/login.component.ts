import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private mainService: MainService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  submitForm(): void {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      let result = this.mainService.getCredentials(this.loginForm.value.username, this.loginForm.value.password);

      //localstorage
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        this.router.navigate(["/home"])
      }
    } else {
      this.markAllAsTouched();
    }
  }

  markAllAsTouched(): void {
    Object.values(this.loginForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
