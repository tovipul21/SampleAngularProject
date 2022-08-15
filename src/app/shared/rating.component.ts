import { Component, EventEmitter, Input, OnChanges, } from '@angular/core';

@Component({
  selector: 'employee-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {

  @Input() rating: number = 0;
  cropWidth: number = 75;

  ngOnChanges(): void {
      console.log("Inside the ngOnChanges");
      this.cropWidth = this.rating * 75 / 5;
  }
}
