import { Component } from '@angular/core';
import { TopnavComponent } from "./topnav/topnav.component";
import { HeaderComponent } from "./header/header.component";
import { TxtSectionComponent } from "./txt-section/txt-section.component";
import { Textsex2Component } from "./textsex2/textsex2.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [TopnavComponent, HeaderComponent, TxtSectionComponent, Textsex2Component]
})
export class ContainerComponent {

}
