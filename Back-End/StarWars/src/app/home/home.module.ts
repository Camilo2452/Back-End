import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home/home.component'
import { SharedModule } from '../shared/shared.module'
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram,
  faSkype,
  fab
} from '@fortawesome/free-brands-svg-icons'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, FontAwesomeModule]
})
export class HomeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab)
    library.addIcons(
      faFacebook,
      faTwitter,
      faLinkedin,
      faYoutube,
      faInstagram,
      faSkype
    )
  }
}
