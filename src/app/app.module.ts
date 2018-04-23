import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';


import { CottonComponent } from './crafts/cotton/cotton.component';
import { NavComponent } from './widgets/nav/nav.component';
import { ProductsModule } from './products/products.module';
import { CraftsModule } from './crafts/crafts.module';
import { SorryComponent } from './sorry/sorry.component';
import { UserComponentComponent } from './user-component/user-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CustomerComponent,
    CustomerHomeComponent,
    NavComponent,
    UserComponentComponent,
    SorryComponent,
    CottonComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CraftsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: LandingPageComponent
      },
      {
        path: 'user/:id',
        component: UserComponentComponent
      },
      {
        path:'**',
        component: SorryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
