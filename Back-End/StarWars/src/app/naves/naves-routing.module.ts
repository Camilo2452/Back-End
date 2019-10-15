import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaveComponent } from './nave/nave.component';

const routes: Routes = [
  {
    path: ':id',
    component: NaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavesRoutingModule {}
