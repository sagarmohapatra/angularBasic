import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
  selectedProduct: string | undefined;
  getProductValue(e:any){
    console.log(e.target.value);
    this.selectedProduct=e.target.value
    
  }
}