import { Component, OnInit, ElementRef } from '@angular/core'
import { Personas } from 'src/app/interfaces/personas'
import { PersonajesService } from 'src/app/servicios/personajes.service'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { flatMap } from 'rxjs/operators'

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  personaje$: Observable<Personas>
  constructor(
    private elementRef: ElementRef,
    private personajesService: PersonajesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#c3c3c3'
    this.personaje$ = this.router.paramMap.pipe(
      flatMap(param => {
        const id = param.get('id')
        return this.personajesService.obtener(id)
      })
    )
  }
}
