import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  standalone: true,
  imports: [],
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {

  Dyname:String="Sipu"

   myMethod(){
    return "my Channel name is "+ this.Dyname
  }

  enable:boolean=false

  appStatus:boolean=true
  status1="online";
  status2="offline"
}


