import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';



const routes: Routes = [{
  path: '', loadChildren: './modulos/peliculas/peliculas.module#PeliculasModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
