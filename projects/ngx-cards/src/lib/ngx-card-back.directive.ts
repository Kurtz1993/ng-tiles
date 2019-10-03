import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-card-back]',
  host: {
    class: 'ngx-card__back',
  },
})
export class NgxCardBackDirective {}
