import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isCollapsible = true;
  isSiderCollapsed: boolean = false;
  collapsedWidth: number = 68;
  sidebarDisplay: any = "block";

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // Access query parameters
    this.route.queryParams.subscribe(params => {
      console.log("home", params);
      this.sidebarDisplay = params['sidebarDisplay'];
    });

    // Set collapsed width based on screen size
    this.breakpointObserver.observe([Breakpoints.XSmall])
      .subscribe(result => {
        console.log("breakpoint", result)
      });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['isSiderCollapsed']) {
  //     console.log('Sidebar state changed:', this.isSiderCollapsed);
  //   }
  // }

}
