import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child11Component } from './child11/child11.component';
import { Child21Component } from './child21/child21.component';
import { ChangecolorDirective } from './changecolor.directive';
import { CreditcardDirective } from './creditcard.directive';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child11Component,
    Child21Component,
    ChangecolorDirective,
    CreditcardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
