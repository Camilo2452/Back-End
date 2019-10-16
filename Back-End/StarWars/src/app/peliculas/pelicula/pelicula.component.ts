import { Component, OnInit, ElementRef } from '@angular/core'
import { Peliculas } from 'src/app/interfaces/peliculas'
import { PeliculasService } from 'src/app/servicios/peliculas.service'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { flatMap } from 'rxjs/operators'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula$: Observable<Peliculas>
  constructor(
    private elementRef: ElementRef,
    private peliculasService: PeliculasService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#ff8303'
    this.pelicula$ = this.router.paramMap.pipe(
      flatMap(param => {
        const id = param.get('id')
        return this.peliculasService.obtener(id)
      })
    )
  }
}
