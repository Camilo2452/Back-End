import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SpeciesRoutingModule } from './species-routing.module'
import { SpecieComponent } from './specie/specie.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [SpecieComponent],
  imports: [CommonModule, SpeciesRoutingModule, SharedModule]
})
export class SpeciesModule {}
