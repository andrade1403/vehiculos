/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesListComponent } from './vehicles-list.component';
import { fa, faker } from '@faker-js/faker';
import { Vehicle } from '../vehicle';

describe('VehiclesListComponent', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiclesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;

    //Realizamos ciclo para generasr datos con faker
    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehicle(
        faker.number.int(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.number.int(),
        faker.number.int(),
        faker.lorem.word(),
        faker.image.url()
      );
      component.vehicles.push(vehiculo);
      console.log(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table', () => {
    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('should have table head', () => {
    const tableHead = debug.query(By.css('thead'));
    expect(tableHead).toBeTruthy();
  })

  it('should have 3 rows plus header', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });

});
