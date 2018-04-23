import { NgModule } from "@angular/core";
import { CraftsComponent } from "./crafts.component";
import { CraftsHomeComponent } from "./crafts-home/crafts-home.component";
import { WoodenComponent } from "./wooden/wooden.component";
import { WoolenComponent } from "./woolen/woolen.component";
import { RouterModule } from "@angular/router";




@NgModule({
    declarations:[
        CraftsComponent,
        CraftsHomeComponent,
        WoodenComponent,
        WoolenComponent
    ],
    imports:[
        RouterModule.forRoot([
            {
                path: 'crafts',
                component: CraftsComponent,
                children:[
                  {
                    path:'',
                    component: CraftsHomeComponent
                  },
                  {
                    path: 'woolen',
                    component: WoolenComponent
                  },
                  {
                    path: 'wooden',
                    component: WoodenComponent
                  }
                ]
              }
        ])
    ],

    exports:[RouterModule]
})
export class CraftsModule{
    
}