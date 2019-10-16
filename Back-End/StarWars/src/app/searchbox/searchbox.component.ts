import { Component, OnInit } from '@angular/core'
import { BusquedaService } from '../servicios/busqueda.service'
import { finalize } from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  keyword = 'nombre'
  loading = false
  public countries = []
  constructor(
    private busquedaService: BusquedaService,
    private router: Router
  ) {}

  ngOnInit() {}
  selectEvent(item) {
    this.router.navigate([item.url])
    console.log(item)
  }

  onChangeSearch(search: string) {
    this.loading = true
    this.busquedaService
      .buscar(search)
      .pipe(
        finalize(() => {
          this.loading = false
        })
      )
      .subscribe(v => {
        this.countries = v
      })
  }

  onFocused(e) {
    // do something
  }
}
