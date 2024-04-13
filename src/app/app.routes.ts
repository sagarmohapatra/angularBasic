import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { WashineMachineComponent } from './washine-machine/washine-machine.component';
import { MobileComponent } from './mobile/mobile.component';
import { ParentComponent } from './buy_product/parent.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'buy-products', component: ParentComponent },
  {
    path: 'products',
    component: ProductsComponent,
    // above component remove whenever child path comment out

    children: [
      // { path: '', component: ProductsComponent },
      // this is the process of child component
      { path: 'laptop', component: LaptopComponent },
      { path: 'tv', component: TvComponent },
      { path: 'washine-machine', component: WashineMachineComponent },
      { path: 'mobile', component: MobileComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
