import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCardsModule } from '@kurtz1993/ngx-cards';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
