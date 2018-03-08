import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HerodetailComponent } from './herodetail/herodetail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HerodetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
