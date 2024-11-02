import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  //Variable para consumo de API
  private api = environment.apiUrl;

  //Constructor
  constructor(private http: HttpClient) { }

  //Metodo para obtener los vehiculos
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.api);
  }
}
