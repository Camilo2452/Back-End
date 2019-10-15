import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(mod => mod.HomeModule)
      }
    ]
  },
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
    path: 'people',
    children: [
      {
        path: '',
        loadChildren: () =>
          // Modulo cargado de forma diferida para hacer el tamaño de descarga inicial más pequeño
          import('./personajes/personajes.module').then(
            mod => mod.PersonajesModule
          )
      }
    ]
  },
  {
    path: 'films',
    children: [
      {
        path: '',
        loadChildren: () =>
          // Modulo cargado de forma diferida para hacer el tamaño de descarga inicial más pequeño
          import('./peliculas/peliculas.module').then(
            mod => mod.PeliculasModule
          )
      }
    ]
  },
  {
    path: 'species',
    children: [
      {
        path: '',
        loadChildren: () =>
          // Modulo cargado de forma diferida para hacer el tamaño de descarga inicial más pequeño
          import('./species/species.module').then(mod => mod.SpeciesModule)
      }
    ]
  },
  {
    path: 'planets',
    children: [
      {
        path: '',
        loadChildren: () =>
          // Modulo cargado de forma diferida para hacer el tamaño de descarga inicial más pequeño
          import('./planets/planets.module').then(mod => mod.PlanetsModule)
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
