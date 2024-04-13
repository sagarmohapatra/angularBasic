import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    imports: [CommonModule, ChildComponent]
})
export class ParentComponent {

  productSelectedInput: boolean = false;
  dynamicProductInput: string;
  
 addProduct: any;
  onSelectProduct(product: string) {
    this.productSelectedInput = true;
    this.dynamicProductInput = product;
  }
 
  onAddedProduct(proData){
    this.addProduct=proData
  }
}
