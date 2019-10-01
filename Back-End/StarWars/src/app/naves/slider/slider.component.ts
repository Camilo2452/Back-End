import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { trigger, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit, OnDestroy {
  current = 0
  @Input() imgList: string[] = []
  private timeout = 3000
  private intevalId
  constructor() {}

  ngOnInit() {
    this.intevalId = setInterval(() => {
      this.current = ++this.current % this.imgList.length
    }, this.timeout)
  }

  ngOnDestroy() {
    if (typeof this.intevalId !== 'undefined') {
      clearInterval(this.intevalId)
    }
  }
}
