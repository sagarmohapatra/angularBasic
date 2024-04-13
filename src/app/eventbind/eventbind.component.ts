import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  standalone: true,
  imports: [],
  templateUrl: './eventbind.component.html',
  styleUrl: './eventbind.component.css',
})
export class EventbindComponent {
  // msg: string = '';
  // onAddCard() {
  //   this.msg = 'product added in card';
  //   console.log(this.msg);

  // }

  onInputclick(e: any) {
    console.log(e);
  }

  msg:string=""
  onAddCard(event:any){
this.msg=event.target.value + " Value add in card"
  }

  getInputInfo(my:any){
console.log(my.value); 
  }
  
}
