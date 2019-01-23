import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
interface Country {
  label: string;
  value: string;
}
@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html'
})
export class VehicleSearchComponent implements OnInit {
  country: Country[];
  term:any;
  DespatchFG: FormGroup;
  /******** Start List of service ********/
  services: any[] = [
    { name: 'Export Test', status: true },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Export Test', status: true },
    { name: 'Renewal Test', status: false },
    { name: '28', status: false },
    { name: '25', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Export Test', status: true }
  ];
  /******** End List of service ********/
  constructor(private toastr: MessageService) {
    this.country = [
      { label: 'Japan', value: 'Japan' },
      { label: 'Germany', value: 'Germany' },
      { label: 'USA', value: 'USA' }
    ];
  }

  ngOnInit() {
    this.DespatchFG = new FormGroup ({
      'chassis-no-1': new FormControl(''),
      'chassisNumber': new FormControl('hello')
    });
  }
  chassNumberValue ($event) {
    this.DespatchFG.patchValue({
        'chassisNumber': $event
    });
}

}
