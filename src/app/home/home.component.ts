import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  statusOnline:boolean=true
  products=[
    {name:"laptop"},
    {name:"mobile"},
    {name:"tv"}
  ]
}
