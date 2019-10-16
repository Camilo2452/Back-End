import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SliderComponent } from './slider/slider.component'
import { TableComponent } from './table/table.component'

@NgModule({
  declarations: [SliderComponent, TableComponent],
  exports: [SliderComponent, TableComponent],
  imports: [CommonModule]
})
export class SharedModule {}
