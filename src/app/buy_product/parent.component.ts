import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    imports: [CommonModule, ChildComponent]
})
export class ParentComponent {
  productSelected: boolean = false;
  dynamicProduct: string;
  addProduct: any;
  onSelectProduct(product: string) {
    this.productSelected = true;
    this.dynamicProduct = product;
  }

  onAddproduct() {
    this.addProduct = this.dynamicProduct;
  }
}
