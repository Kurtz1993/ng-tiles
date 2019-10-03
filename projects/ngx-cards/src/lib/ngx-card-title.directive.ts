import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-card-title]',
  host: {
    class: 'ngx-card__title',
  },
})
export class NgxCardTitleDirective {}
