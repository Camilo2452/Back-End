import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AutocompleteLibModule } from 'angular-ng-autocomplete'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SearchboxComponent } from './searchbox/searchbox.component'

@NgModule({
  declarations: [AppComponent, SearchboxComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AutocompleteLibModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
