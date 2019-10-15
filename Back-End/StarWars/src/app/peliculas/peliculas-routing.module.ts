import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PeliculaComponent } from './pelicula/pelicula.component'

const routes: Routes = [
  {
    path: ':id',
    component: PeliculaComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule {}
