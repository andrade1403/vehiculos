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

  //Declaramos arreglo de marcas
  marcas: Array<string> = [];
  dict: {[key: string]: number} = {};

  //Constructor de la clase
  constructor(private vehicleService: VehiclesService) { }

  //Metodo que traera los vehiculos
  getVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
      this.vehicleCount();
    })
  }

  //Metodo para traer las marcas unicas
  getUniqueBrands() {
    this.marcas = Array.from(new Set(this.vehicles.map(v => v.marca)));
  }

  //Metodo para contar carros por marca
  vehicleCount(): void {
    //Traemos las marcas unicas
    this.getUniqueBrands();

    //Inicilizamos el diccionario con las marcas
    for(let m of this.marcas) { this.dict[m] = 0; }

    //Contamos los vehiculos por marca
    for(let v of this.vehicles) {
      let marca = v.marca;
      this.dict[marca] += 1;
    }
  }

  ngOnInit() {
    this.getVehicles();
  }
}
