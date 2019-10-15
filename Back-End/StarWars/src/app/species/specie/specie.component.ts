import { Component, OnInit, ElementRef } from '@angular/core'
import { Especies } from 'src/app/interfaces/especies'
import { EspeciesService } from 'src/app/servicios/especies.service'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { flatMap } from 'rxjs/operators'

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {
  especie$: Observable<Especies>
  constructor(
    private elementRef: ElementRef,
    private especiesService: EspeciesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#c3c3c3'
    this.especie$ = this.router.paramMap.pipe(
      flatMap(param => {
        const id = param.get('id')
        return this.especiesService.obtener(id)
      })
    )
  }
}
