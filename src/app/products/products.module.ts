import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProductHomeComponent } from "./product-home/product-home.component";
import { SareesComponent } from "./sarees/sarees.component";
import { DhotisComponent } from "./dhotis/dhotis.component";
import { RouterModule } from "@angular/router";




@NgModule({
    declarations:[
        ProductsComponent,
        ProductHomeComponent,
        SareesComponent,
        DhotisComponent
    ],
    imports:[
        RouterModule.forRoot([
            {
                path: 'products',
                component: ProductsComponent,
                children:[
                  {
                    path:'',
                    redirectTo: 'home',
                    pathMatch: 'full'
                  },
                  {
                      path: 'home',
                      component: ProductHomeComponent
                  },
                  {
                    path: 'sarees',
                    component: SareesComponent
                  },
                  {
                    path:'dhotis',
                    component: DhotisComponent
                  }
                ]
              }
        ])
    ],
    exports: [RouterModule]
})
export class ProductsModule {

}