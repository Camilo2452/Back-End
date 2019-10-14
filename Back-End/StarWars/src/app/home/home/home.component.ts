import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  year = new Date().getFullYear()
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#0a0a0a'
  }
}
