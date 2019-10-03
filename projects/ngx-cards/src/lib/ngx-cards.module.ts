import { NgModule } from '@angular/core';
import { NgxCardComponent } from './ngx-card/ngx-card.component';

const publicDeclarations = [NgxCardComponent];

@NgModule({
  declarations: [...publicDeclarations],
  imports: [],
  exports: publicDeclarations,
})
export class NgxCardsModule {}
