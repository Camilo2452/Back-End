import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PersonajesRoutingModule } from './personajes-routing.module'
import { PersonajeComponent } from './personaje/personaje.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [PersonajeComponent],
  imports: [CommonModule, PersonajesRoutingModule, SharedModule]
})
export class PersonajesModule {}
