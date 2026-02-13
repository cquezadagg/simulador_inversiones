import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports:[
    PublicRoutingModule,
    MatButtonModule,
    MatCardModule

  ],
})
export class PublicModule{}
