import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { expand, map, reduce } from 'rxjs/operators'
import { SResponse } from '../interfaces/sresponse'
import { empty } from 'rxjs'
import { MenuItem } from '../interfaces/menu-item'
import { Nave } from '../interfaces/nave'

@Injectable({
  providedIn: 'root'
})
export class NavesService {
  constructor(private http: HttpClient) {}

  private seguirNext = (next: string) => {
    return this.http.get(next)
  }

  obtenerMenu = () =>
    this.http.get('https://swapi.co/api/starships/').pipe(
      expand((res: SResponse<Nave>) => {
        // Llama recursivamente a seguirNext hasta que no existan más datos
        if (res.next) {
          return this.seguirNext(res.next)
        } else {
          return empty()
        }
      }),
      map((res: SResponse<Nave>) => res.results.map(toMenuItem)),
      reduce((anterior, actual) => [...anterior, ...actual]) // Junta todos los items en una sola lista
    )

  obtenerNave = (id: number | string) =>
    this.http.get<Nave>(`https://swapi.co/api/starships/${id}/`)

  buscar = (params: HttpParams) =>
    this.http
      .get<SResponse<Nave>>(`https://swapi.co/api/starships/`, {
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
    nombre: item.name,
    url: `starships/${id}`
  }
}
