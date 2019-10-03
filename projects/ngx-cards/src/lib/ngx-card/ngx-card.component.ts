import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-card',
  templateUrl: './ngx-card.component.html',
  styleUrls: ['./ngx-card.component.scss'],
})
export class NgxCardComponent implements OnInit, AfterViewInit {
  @ViewChild('titleContainer', { static: true })
  titleContainer: ElementRef<HTMLDivElement>;

  hasCustomTitle = false;
  // get hasCardTitle() {
  //   return !!this.cardTitle;
  // }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.titleContainer, !!this.titleContainer.nativeElement.children.length);
    // this.hasCustomTitle = !!this.titleContainer.nativeElement.children.length;
  }
}
