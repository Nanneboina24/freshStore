import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  category!: string;
  itemName!: string;
  content: any = [];
  userDataString!: any;


  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit() {
    // Access query parameters
    this.route.queryParams.subscribe(params => {
      console.log("content",params);
      this.category = params['category'];
      this.itemName = params['itemName'];

      //* Content
      this.content = this.mainService.getContent(this.category, this.itemName);
      console.log("content", this.content);

      //* storage
      this.userDataString = localStorage?.getItem("user");
      if (this.userDataString !== null) {
        this.userDataString = JSON.parse(this.userDataString);
      } else {
        console.log("User data not found in localStorage");
      }

    });
  }

  addToCart(item: any): void {
    console.log('Added to Cart:', item,this.userDataString.id);
    item.quantity = item.quantity ? item.quantity : 1;
    let data = this.mainService.postCart(this.userDataString.id, item);
    console.log(data);
  }
}
