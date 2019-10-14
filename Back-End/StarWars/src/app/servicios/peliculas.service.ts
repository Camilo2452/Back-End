import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { expand, map, reduce } from 'rxjs/operators'
import { SResponse } from '../interfaces/sresponse'
import { empty } from 'rxjs'
import { MenuItem } from '../interfaces/menu-item'
import { Peliculas } from '../interfaces/peliculas'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  private seguirNext = (next: string) => {
    return this.http.get(next)
  }

  obtenerMenu = () =>
    this.http.get('https://swapi.co/api/films/').pipe(
      expand((res: SResponse<Peliculas>) => {
        // Llama recursivamente a seguirNext hasta que no existan más datos
        if (res.next) {
          return this.seguirNext(res.next)
        } else {
          return empty()
        }
      }),
      map((res: SResponse<Peliculas>) => res.results.map(toMenuItem)),
      reduce((anterior, actual) => [...anterior, ...actual]) // Junta todos los items en una sola lista
    )

  obtener = (id: number | string) =>
    this.http.get<Peliculas>(`https://swapi.co/api/films/${id}/`)

  buscar = (params: HttpParams) =>
    this.http
      .get<SResponse<Peliculas>>(`https://swapi.co/api/films/`, {
        params
      })
      .pipe(
        map(res => {
          return res.results.map(toMenuItem)
        })
      )
}

function toMenuItem(item): MenuItem {
  // Convierte el listado de naves en items del menú
  const id = +item.url.match(/\d+/)[0]
  return {
    id,
    nombre: item.title,
    url: `films/${id}`
  }
}
