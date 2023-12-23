import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userDataString!: any;
  fullCart: any[] = [];
  cart: any[] = [];
  pageIndex = 1;
  pageSize = 5;
  totalItems!: number;

  constructor(private router: Router, private mainService: MainService) { }

  getTotal(): number {
    return this.fullCart.reduce((total: number, item: any) => total + item.quantity * item.price, 0);
  }

  Checkout() {
    console.log(this.cart);
    this.mainService.updateCart(this.userDataString.id, this.cart);
    this.router.navigate(["/home/checkout"], {
      queryParams: {
        sidebarDisplay: "none",
      }
    });
  }

  //*pagination
  updateCartPage(): void {
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    // Ensure endIndex does not exceed the totalItems
    const actualEndIndex = Math.min(endIndex, this.totalItems);
    this.cart = this.fullCart.slice(startIndex, actualEndIndex);
  }

  onPageIndexChange(page: number) {
    console.log("index", page);
    this.pageIndex = page;
    this.totalItems = this.fullCart.length; // Update totalItems when page size changes
    this.updateCartPage();
  }

  onPageSizeChange(page: number) {
    console.log("size", page);
    this.pageSize = page;
    this.pageIndex = 1;
    this.totalItems = this.fullCart.length; // Update totalItems when page size changes
    this.updateCartPage();
  }

  onCurrentPageDataChange(e: any) {
    console.log("curr", e);
    //* checking for empty data in pages
    if (e.length === 0) {
      this.pageIndex = 1;
      this.updateCartPage();
    }

  }

  clearAll() {
    this.mainService.delCartAll(this.userDataString.id);
    this.fullCart = [];
    this.totalItems = this.fullCart.length; // Update totalItems when page size changes
    this.updateCartPage();
  }

  clearItem(item: any) {
    let result = this.mainService.delCartItem(this.userDataString.id, item);
    this.fullCart = result;
    this.totalItems = this.fullCart.length; // Update totalItems when page size changes
    this.updateCartPage();
  }

  ngOnInit(): void {
    //* storage
    this.userDataString = localStorage?.getItem("user");
    if (this.userDataString !== null) {
      this.userDataString = JSON.parse(this.userDataString);
    } else {
      console.log("User data not found in localStorage");
    }

    //* Content
    this.fullCart = this.mainService.getCart(this.userDataString.id);
    console.log("cart", this.fullCart);
    this.totalItems = this.fullCart.length; // Set the totalItems based on the data length
    this.updateCartPage();
  }
}
