import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() keys: string[] = []
  @Input() data: any
  @Input() linkKeys: string[] = []
  constructor() {}

  ngOnInit() {}

  inLinks(key: string) {
    return this.linkKeys.includes(key)
  }

  asArray(val: any) {
    return Array.isArray(val) ? val : [val]
  }
}
