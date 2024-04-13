import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css',
})
export class NgforComponent {
  [x: string]: any;
  product = [
    {
      proming:
        'https://tse3.mm.bing.net/th?id=OIP.1Q0Ef3QkiPc-2Ux_Usj7lgHaFb&pid=Api&P=0&h=220',
      name: 'laptop',
      id: 'pro01',
      price: 20000,
    },
    {
      proming:
        'https://tse3.mm.bing.net/th?id=OIP.CRBBGZZzyJGhWrt1kCbRQQHaHa&pid=Api&P=0&h=220',
      name: 'mobile',
      id: 'pro01',
      price: 5000,
    },
    {
      proming:
        'https://tse4.mm.bing.net/th?id=OIP.nh54LUAMZ1jIm-x9etTrtQHaE8&pid=Api&P=0&h=220',
      name: 'Tv',
      id: 'pro01',
      price: 793773,
    },
    {
      proming:
        'https://tse1.mm.bing.net/th?id=OIP.7Q3IA1l6TdSzHUc40TNzewHaHr&pid=Api&P=0&h=220',
      name: 'washine',
      id: 'pro01',
      price: 456789,
    },
  ];
  users = [];
  router: any;

  onCreateUser(uname: any) {
    this.users.push({
      name: uname.value,
    });
    if (this.users.length > 3) {
      this['Router'].navigate(['products'])
      // alert("fghj")
    }
  }

  onCreateRemove() {
    this.users.splice(this.users.length - 1);
  }
  onRemoveitem(item: any) {
    this.users.splice(item, 1);
  }
}
