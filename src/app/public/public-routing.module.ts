import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { todo } from "node:test";

const routes: Routes =[
  // TODO: Agregar los componentes a los cuales va a redirigir las rutas

  { path: 'home'},
  { path: 'login'},
  {path: 'home-private'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule{}
