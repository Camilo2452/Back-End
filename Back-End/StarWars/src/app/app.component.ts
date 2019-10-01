import { Component, OnInit } from '@angular/core'
import { NavesService } from './servicios/naves.service'
import { MenuItem } from './interfaces/menu-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuNaves: MenuItem[] = []
  constructor(private navesService: NavesService) {}

  ngOnInit() {
    this.navesService.obtenerMenu().subscribe(
      menu => (this.menuNaves = menu.sort((a, b) => (a.id < b.id ? -1 : 1))) // Ordena menú de acuerdo a la id
    )
  }
}
