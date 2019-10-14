import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PeliculasRoutingModule } from './peliculas-routing.module'
import { PeliculaComponent } from './pelicula/pelicula.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [PeliculaComponent],
  imports: [CommonModule, PeliculasRoutingModule, SharedModule]
})
export class PeliculasModule {}
