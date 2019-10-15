import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PersonajeComponent } from './personaje/personaje.component'

const routes: Routes = [
  {
    path: ':id',
    component: PersonajeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule {}
