import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  maxValue = 0
  tags = [
    { tag: 'Software', count: 15, important: false },
    { tag: 'statistics', count: 10, important: false },
    { tag: 'teaching', count: 15, important: false },
    { tag: 'technology', count: 12, important: true },
    { tag: 'tips', count: 13, important: false },
    { tag: 'tool', count: 15, important: false },
    { tag: 'tools', count: 15, important: false },
    { tag: 'toread', count: 8, important: false },
    { tag: 'travel', count: 5, important: false },
    { tag: 'tutotial', count: 1, important: false },
    { tag: 'tutorials', count: 5, important: false },
    { tag: 'tv', count: 10, important: false },
    { tag: 'twitter', count: 8, important: false },
    { tag: 'typography', count: 15, important: false },
    { tag: 'ubuntu', count: 12, important: false },
    { tag: 'usability', count: 12, important: false },
    { tag: 'video', count: 12, important: false },
    { tag: 'videos', count: 8, important: false },
    { tag: 'visualization', count: 12, important: false },
    { tag: 'web', count: 5, important: false },
    { tag: 'web 2.0', count: 1, important: false },
    { tag: 'web design', count: 10, important: false },
    { tag: 'webdev', count: 10, important: false },
    { tag: 'wiki', count: 14, important: false },
    { tag: 'windows', count: 5, important: false },
    { tag: 'wordpress', count: 15, important: false },
    { tag: 'work', count: 1, important: false },
    { tag: 'writing', count: 10, important: false },
    { tag: 'youtube', count: 12, important: false }
  ]
  constructor() {}

  ngOnInit() {
    this.maxValue = this.tags
      .map(tag => tag.count)
      .sort((a, b) => (a > b ? 1 : -1))
      .push()
  }

  getFontSize(count: number) {
    const fontMax = 6
    const fontMin = 1
    return `${Math.floor(
      (count / this.maxValue) * (fontMax - fontMin + 1) + fontMin
    )}em`
  }
}
