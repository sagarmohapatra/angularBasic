import { Component } from '@angular/core';
import { NgforComponent } from "../ngfor/ngfor.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [NgforComponent]
})
export class AboutComponent {

}
