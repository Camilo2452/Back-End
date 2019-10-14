import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavesRoutingModule } from './naves-routing.module'
import { NaveComponent } from './nave/nave.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [NaveComponent],
  imports: [CommonModule, NavesRoutingModule, SharedModule]
})
export class NavesModule {}
