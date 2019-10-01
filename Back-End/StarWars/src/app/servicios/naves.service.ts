import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { expand, map, reduce } from 'rxjs/operators'
import { Naves } from '../interfaces/naves'
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
      expand((res: Naves) => {
        // Llama recursivamente a seguirNext hasta que no existan más datos
        if (res.next) {
          return this.seguirNext(res.next)
        } else {
          return empty()
        }
      }),
      map((res: Naves) =>
        res.results.map(nave => {
          // Convierte el listado de naves en items del menú
          const id = +nave.url.match(/\d+/)[0]
          return {
            id,
            nombre: nave.name,
            url: `starships/${id}`
          } as MenuItem
        })
      ),
      reduce((anterior, actual) => [...anterior, ...actual]) // Junta todos los items en una sola lista
    )

  obtenerNave = (id: number | string) =>
    this.http.get<Nave>(`https://swapi.co/api/starships/${id}/`)
}
