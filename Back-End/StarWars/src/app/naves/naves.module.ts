import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavesRoutingModule } from './naves-routing.module'
import { NaveComponent } from './nave/nave.component'
import { SliderComponent } from './slider/slider.component'

@NgModule({
  declarations: [NaveComponent, SliderComponent],
  imports: [CommonModule, NavesRoutingModule]
})
export class NavesModule {}
