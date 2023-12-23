import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  store: any = {}
  padding: string = "48px"; //default

  constructor(private router: Router, private mainService: MainService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.store = this.mainService.getSidebar();
    console.log(this.store);

    // Adjust padding based on screen size
    // this.breakpointObserver.observe([Breakpoints.XSmall])
    //   .subscribe(result => {
    //     console.log(result)
    //     this.padding = result.matches ? "24px" : "48px";
    //   });

  }

  getCategoryKeys(): string[] {
    return Object.keys(this.store);
  }

  navigateToRoute(category: string, itemName: string) {
    this.router.navigate(['/home/content'], {
      queryParams: {
        category: category,
        itemName: itemName
      }
    });
  }

}
