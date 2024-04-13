import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  standalone: true,
  imports: [],
  templateUrl: './class-style.component.html',
  styleUrl: './class-style.component.css'
})
export class ClassStyleComponent {
  myStye5:string="15px"
  iaActive:boolean=true
  multiclass={
    class1:true,
    class2:true,
    class3:true
  }
  multiStyle={
    'background:'red',
    'border':'10px solid green'
  }
}
