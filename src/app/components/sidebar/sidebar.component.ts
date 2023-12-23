import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  item_padding: string = "48px"; //default
  main_padding: string = "5px"; //default
  tooltipColor: string = "#e9e995"
  @Input() childCollapsed!: boolean;

  constructor(private router: Router, private mainService: MainService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.store = this.mainService.getSidebar();
    console.log(this.store);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called whenever any input property changes
    if (changes['childCollapsed']) {
      if (changes['childCollapsed'].currentValue) {
        this.item_padding = "24px";
        this.main_padding = "20px"
      }
      else {
        this.item_padding = "48px";
        this.main_padding = "5px"
      }
    }
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
