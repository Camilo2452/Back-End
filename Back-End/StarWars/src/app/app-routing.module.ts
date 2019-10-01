import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: 'starships',
    children: [
      {
        path: '',
        loadChildren: () =>
          // Modulo cargado de forma diferida para hacer el tamaño de descarga inicial más pequeño
          import('./naves/naves.module').then(mod => mod.NavesModule)
      }
    ]
  },
  {
    path: 'company',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./compañia/compañia.module').then(mod => mod.CompañiaModule)
      }
    ]
  },
  {
    path: '**', // debe ir siempre de ultimo
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
