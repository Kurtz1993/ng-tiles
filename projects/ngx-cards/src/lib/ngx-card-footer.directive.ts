import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-card-footer]',
  host: {
    class: 'ngx-card__footer',
  },
})
export class NgxCardFooterDirective {}
