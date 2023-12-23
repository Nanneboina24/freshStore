import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userDataString!: any;
  cart!: any;

  constructor(private router: Router, private mainService: MainService) { }
  ngOnInit(): void {
    this.userDataString = localStorage?.getItem("user");
    if (this.userDataString !== null) {
      this.userDataString = JSON.parse(this.userDataString);
    } else {
      console.log("User data not found in localStorage");
    }

    //* cart
    this.updateCartData();

    // Subscribe to changes in the cart
    this.mainService.cartUpdated.subscribe(() => {
      this.updateCartData();
    });
  }

  updateCartData(): void {
    this.cart = this.mainService.getCart(this.userDataString.id);
  }

  navigateToCart() {
    this.router.navigate(['/home/cart'], {
      queryParams: {
        sidebarDisplay: "none",
      }
    });
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

}
