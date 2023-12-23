import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  //*services
  private cartUpdatedSubject: BehaviorSubject<void> = new BehaviorSubject<void>(null!);
  // Expose the cartUpdated observable
  cartUpdated: Observable<void> = this.cartUpdatedSubject.asObservable();


  //*login
  credentials: any = [
    {
      id: "user1",
      username: "sumanth",
      password: "12345",
      type: "user",
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
    },
    {
      id: "user2",
      username: "nanneboina",
      password: "12345",
      type: "user",
      logo: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
    },
    {
      id: "admin1",
      username: "admin",
      password: "12345",
      type: "admin",
      logo: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
    }
  ]

  //*sidebar
  store: any = {
    Fruits: [
      {
        name: "Citrus",
        logo: "https://images.pexels.com/photos/4022111/pexels-photo-4022111.jpeg"
      },
      {
        name: "Berries",
        logo: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg"
      },
      {
        name: "Stone",
        logo: "https://images.pexels.com/photos/3029520/pexels-photo-3029520.jpeg"
      },
      {
        name: "Tropical",
        logo: "https://images.pexels.com/photos/2970289/pexels-photo-2970289.jpeg"
      },
      {
        name: "Melons",
        logo: "https://images.pexels.com/photos/15609529/pexels-photo-15609529/free-photo-of-watermelons-on-market.jpeg"
      },
      {
        name: "Dessert",
        logo: "https://images.pexels.com/photos/7937351/pexels-photo-7937351.jpeg"
      }
    ],
    Vegetables: [
      {
        name: "Root",
        logo: "https://images.pexels.com/photos/5502852/pexels-photo-5502852.jpeg"
      },
      {
        name: "Leafy",
        logo: "https://images.pexels.com/photos/12932765/pexels-photo-12932765.jpeg"
      },
      {
        name: "Cruciferous",
        logo: "https://images.pexels.com/photos/3029520/pexels-photo-3029520.jpeg"
      },
      {
        name: "Allium",
        logo: "https://images.pexels.com/photos/121629/pexels-photo-121629.jpeg"
      },
      {
        name: "Solanaceous",
        logo: "https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg"
      },
      {
        name: "Legumes",
        logo: "https://images.pexels.com/photos/10111852/pexels-photo-10111852.jpeg"
      }
    ]
  }

  //*content
  Fruits: any = {
    Citrus: [
      {
        name: "orange",
        url: "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg",
        price: "100",
      },
      {
        name: "lemon",
        url: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg",
        price: "50"
      },
      {
        name: "lime",
        url: "https://images.pexels.com/photos/1047261/pexels-photo-1047261.jpeg",
        price: "200"
      },
      {
        name: "grape",
        url: "https://images.pexels.com/photos/45209/purple-grapes-vineyard-napa-valley-napa-vineyard-45209.jpeg",
        price: "150"
      }
    ],
    Berries: [
      {
        name: "raspberries",
        url: "https://images.pexels.com/photos/2682661/pexels-photo-2682661.jpeg",
        price: "200"
      },
      {
        name: "blueberries",
        url: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg",
        price: "400"
      },
    ],
    Stone: [],
    Tropical: [],
    Melons: [],
    Dessert: []
  }

  Vegetables: any = {
    Root: [
      {
        name: "carrots",
        url: "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg",
        price: "100"
      },
      {
        name: "potatoes",
        url: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg",
        price: "80"
      },
      {
        name: "radish",
        url: "https://images.pexels.com/photos/775207/pexels-photo-775207.jpeg",
        price: "200"
      },
      {
        name: "beetroot",
        url: "https://images.pexels.com/photos/4963558/pexels-photo-4963558.jpeg",
        price: "150"
      },

    ],
    Leafy: [
      {
        name: "spinach",
        url: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg",
        price: "75"
      },
    ],
    Cruciferous: [],
    Allium: [],
    Solanaceous: [],
    Legumes: []
  }

  //*cart
  cart: any =
    {
      user1: [
        {
          name: "orange",
          url: "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg",
          price: "100.55",
          quantity: 10
        },
        {
          name: "lemon",
          url: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg",
          price: "50",
          quantity: 12
        },
        {
          name: "lime",
          url: "https://images.pexels.com/photos/1047261/pexels-photo-1047261.jpeg",
          price: "200",
          quantity: 1
        },
        {
          name: "grape",
          url: "https://images.pexels.com/photos/45209/purple-grapes-vineyard-napa-valley-napa-vineyard-45209.jpeg",
          price: "150",
          quantity: 2
        },
        {
          name: "carrots",
          url: "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg",
          price: "100",
          quantity: 5
        },
        {
          name: "potatoes",
          url: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg",
          price: "80",
          quantity: 6
        },
       
      ],
      user2: []
    }

  constructor() { }

  //*API's Integration
  getCredentials(username: string, password: string): any {
    const user = this.credentials.find((u: any) => u.username === username && u.password === password);
    return user;
  }

  getSidebar(): any {
    return this.store;
  }

  getContent(category: string, itemName: string): any {
    if (category === "Fruits") {
      for (let item of Object.keys(this.Fruits)) {
        if (item === itemName) {
          return this.Fruits[item];
        }
      }

    }
    else if (category === "Vegetables") {
      for (let item of Object.keys(this.Vegetables)) {
        if (item === itemName) {
          return this.Vegetables[item];
        }
      }
    }
    else {
      return []
    }
  }

  getCart(id: string): any {
    console.log(id)
    const cartData = this.cart[id];
    return cartData;
  }

  postCart(id: string, item: any): any {
    let cartData = this.cart[id];
    cartData.push(item);
    this.cart[id] = cartData;
    this.cartUpdatedSubject.next();
    return this.cart[id];
  }

  updateCart(id: string, items: any): any {
    this.cart[id] = items;
    this.cartUpdatedSubject.next();
    return this.cart[id];
  }

  delCartAll(id: string) {
    this.cart[id] = []
    this.cartUpdatedSubject.next();
  }

  delCartItem(id: string, item: any) {
    let cardData = this.cart[id];
    let finalData = cardData.filter((f: any) => f.name !== item.name)
    this.cart[id] = finalData;
    this.cartUpdatedSubject.next();
    return finalData;
  }
}
