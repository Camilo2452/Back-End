import { Injectable } from '@angular/core'
import { NavesService } from './naves.service'
import { forkJoin } from 'rxjs'
import { HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { PersonajesService } from './personajes.service'
import { PeliculasService } from './peliculas.service'
import { EspeciesService } from './especies.service'
import { PlanetasService } from './planetas.service'

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  constructor(
    private naves: NavesService,
    private personajes: PersonajesService,
    private peliculas: PeliculasService,
    private especies: EspeciesService,
    private planetas: PlanetasService
  ) {}

  buscar = (text: string) => {
    let params = new HttpParams()
    params = params.set('search', text)
    return forkJoin(
      this.naves.buscar(params),
      this.personajes.buscar(params),
      this.peliculas.buscar(params),
      this.especies.buscar(params),
      this.planetas.buscar(params)
    ).pipe(
      map(val => {
        return flatten(val)
      })
    )
  }
}

function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(toFlatten)
  }, [])
}
