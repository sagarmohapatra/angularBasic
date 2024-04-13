import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
isValid:boolean=false
onCreateBlock(){
  this.isValid=true
}
}
