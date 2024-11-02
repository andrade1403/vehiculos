import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  //Declaramos arreglo de vehiculos
  vehicles: Array<Vehicle> = [];

  //Constructor de la clase
  constructor(private vehicleService: VehiclesService) { }

  //Metodo que traera los vehiculos
  getVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    })
  }

  ngOnInit() {
    this.getVehicles();
  }

}
