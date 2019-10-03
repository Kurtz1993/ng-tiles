import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngx-card-body]',
  host: {
    class: 'ngx-card__body',
  },
})
export class NgxCardBodyDirective {}
