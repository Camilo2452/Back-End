import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PlanetsRoutingModule } from './planets-routing.module'
import { PlanetComponent } from './planet/planet.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [PlanetComponent],
  imports: [CommonModule, PlanetsRoutingModule, SharedModule]
})
export class PlanetsModule {}
