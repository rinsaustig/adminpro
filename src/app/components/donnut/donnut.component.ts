import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styles: [],
})
export class DonnutComponent implements OnInit {
  @Input() title: string = 'Undefined';
  @Input('labels') doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
  @Input('values') data: number[] = [350, 450, 100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: this.data }],
  };

  ngOnInit() {
    console.log(this.doughnutChartData);
  }
}
