import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ParkingLot } from './model/parkingLot.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

      parkingForm = this.formBuilder.group({
        veiculo: ['',[ Validators.required ]],
        placa: ['', [ Validators.required, Validators.minLength(7) ]],
        driver: ['',[ Validators.required ]],
        driverContact: ['',[Validators.required, Validators.minLength(9) ]]
      })

    allCars: ParkingLot[] = []

    constructor(private formBuilder: FormBuilder) {

    }
  ngOnInit() {
    let list = localStorage.getItem('car-list')
    if (list != null){
      this.allCars = JSON.parse(list)
    }
  }

    save() {
      if(this.parkingForm.valid){
      let veiculo = this.parkingForm.value.veiculo
      let placa = this.parkingForm.value.placa
      let driver = this.parkingForm.value.driver
      let driverContact = this.parkingForm.value.driverContact
      
      let car = new ParkingLot(veiculo, placa, driver, driverContact)
      this.allCars.push(car)
      this.parkingForm.reset()

        localStorage.setItem('car-list', JSON.stringify(this.allCars))

    }
  }
}