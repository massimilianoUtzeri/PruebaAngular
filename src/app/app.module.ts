import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadoresComponent } from './Jugadores/jugadores.component';
import { JugadorComponent } from './jugador/jugador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,JugadoresComponent, JugadorComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
