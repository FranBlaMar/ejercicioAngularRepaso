import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarRegalosModule } from './listar-regalos/listar-regalos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListarRegalosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
