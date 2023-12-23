import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import { Block } from '@angular/compiler';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  shippingForm!: FormGroup;
  userDataString!: any;
  result!: any;
  status: any = "none";

  constructor(private fb: FormBuilder, private router: Router, private mainService: MainService) { }

  ngOnInit(): void {

    //* storage
    this.userDataString = localStorage?.getItem("user");
    if (this.userDataString !== null) {
      this.userDataString = JSON.parse(this.userDataString);
    } else {
      console.log("User data not found in localStorage");
    }

    this.shippingForm = this.fb.group({
      name: [this.userDataString?.username, [Validators.required]],
      address: ['', [Validators.required]]
    });

    this.result = this.mainService.getCart(this.userDataString?.id);
  }

  submitForm(): void {
    console.log(this.shippingForm)
    if (this.shippingForm.valid) {
      console.log('Form submitted:', this.shippingForm.value);
      this.mainService.delCartAll(this.userDataString.id);
      this.status = "block"
    } else {
      this.markAllAsTouched();
    }
  }

  markAllAsTouched(): void {
    Object.values(this.shippingForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  getTotal(): number {
    return this.result.reduce((total: number, item: any) => total + item.quantity * item.price, 0);
  }

  afterClose() {
    this.router.navigate(["/home/content"])
  }

}
