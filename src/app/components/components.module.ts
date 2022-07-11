import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { IncreaserComponent } from './increaser/increaser.component';
import { DonnutComponent } from './donnut/donnut.component';

@NgModule({
  declarations: [IncreaserComponent, DonnutComponent],
  exports: [IncreaserComponent, DonnutComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
