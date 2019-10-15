import { Component, OnInit, ElementRef } from '@angular/core'
import { Planetas } from 'src/app/interfaces/planetas'
import { PlanetasService } from 'src/app/servicios/planetas.service'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { flatMap } from 'rxjs/operators'

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planeta$: Observable<Planetas>
  constructor(
    private elementRef: ElementRef,
    private planetasService: PlanetasService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#0a0a0a'
    this.planeta$ = this.router.paramMap.pipe(
      flatMap(param => {
        const id = param.get('id')
        return this.planetasService.obtener(id)
      })
    )
  }
}
