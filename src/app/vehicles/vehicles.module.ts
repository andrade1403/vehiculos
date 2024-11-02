import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiclesListComponent],
  exports: [VehiclesListComponent]
})
export class VehiclesModule { }
