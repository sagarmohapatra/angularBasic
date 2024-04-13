import { Component } from '@angular/core';
import {   RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
// import { ContainerComponent } from "./container/container.component";
// import { DatabindComponent } from "./databind/databind.component";
// import { ClassStyleComponent } from "./class-style/class-style.component";
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { HomeComponent } from "./home/home.component";
import { ParentComponent } from "./buy_product/parent.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NgifComponent,
        TwoWayComponent,
        EventbindComponent,
        NgswitchComponent,
        NgforComponent,
        // HomeComponent,
        RouterLink,
        RouterLinkActive,
        ParentComponent
    ]
})
export class AppComponent {
  title = 'AngularBasic';
}
