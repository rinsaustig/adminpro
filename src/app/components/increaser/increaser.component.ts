import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() emitPercent: EventEmitter<number> = new EventEmitter();

  onChange(value: number) {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.emitPercent.emit(this.progress);
  }

  changePercent(value: number) {
    if (this.progress >= 95 && value >= 0) {
      this.emitPercent.emit(100);
      this.progress = 100;
      return;
    }

    if (this.progress <= 5 && value < 0) {
      this.emitPercent.emit(0);

      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;
    this.emitPercent.emit(this.progress);
  }
}
