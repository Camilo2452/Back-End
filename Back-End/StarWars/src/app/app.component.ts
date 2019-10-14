import { Component, OnInit } from '@angular/core'
import { NavesService } from './servicios/naves.service'
import { MenuItem } from './interfaces/menu-item'
import { PersonajesService } from './servicios/personajes.service'
import { PeliculasService } from './servicios/peliculas.service'
import { EspeciesService } from './servicios/especies.service'
import { PlanetasService } from './servicios/planetas.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  year = new Date().getFullYear()
  menuNaves: MenuItem[] = []
  menuPersonajes: MenuItem[] = []
  menuPeliculas: MenuItem[] = []
  menuEspecies: MenuItem[] = []
  menuPlanetas: MenuItem[] = []
  constructor(
    private navesService: NavesService,
    private personajesService: PersonajesService,
    private peliculasService: PeliculasService,
    private especiesService: EspeciesService,
    private planetasService: PlanetasService
  ) {}

  ngOnInit() {
    this.navesService.obtenerMenu().subscribe(
      menu => (this.menuNaves = menu.sort((a, b) => (a.id < b.id ? -1 : 1))) // Ordena menú de acuerdo a la id
    )
    this.personajesService.obtenerMenu().subscribe(
      menu =>
        (this.menuPersonajes = menu.sort((a, b) => (a.id < b.id ? -1 : 1))) // Ordena menú de acuerdo a la id
    )
    this.peliculasService.obtenerMenu().subscribe(
      menu => (this.menuPeliculas = menu.sort((a, b) => (a.id < b.id ? -1 : 1))) // Ordena menú de acuerdo a la id
    )
    this.especiesService.obtenerMenu().subscribe(
      menu => (this.menuEspecies = menu.sort((a, b) => (a.id < b.id ? -1 : 1))) // Ordena menú de acuerdo a la id
    )
    this.planetasService.obtenerMenu().subscribe(
      menu => (this.menuPlanetas = menu.sort((a, b) => (a.id < b.id ? -1 : 1))) // Ordena menú de acuerdo a la id
    )
  }
}
