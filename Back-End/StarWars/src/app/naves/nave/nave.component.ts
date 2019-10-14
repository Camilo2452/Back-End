import { Component, OnInit, ElementRef } from '@angular/core'
import { NavesService } from '../../servicios/naves.service'
import { ActivatedRoute } from '@angular/router'
import { flatMap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Nave } from 'src/app/interfaces/nave'

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {
  nave$: Observable<Nave>
  constructor(
    private navesService: NavesService,
    private router: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#0a0a0a'
    this.nave$ = this.router.paramMap.pipe(
      flatMap(param => {
        const id = param.get('id')
        return this.navesService.obtenerNave(id)
      })
    )
  }
}
