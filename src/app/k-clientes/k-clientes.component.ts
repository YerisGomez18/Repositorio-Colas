import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-k-clientes',
  templateUrl: './k-clientes.component.html',
  styleUrls: ['./k-clientes.component.css']
})
export class KClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let values = new getValues();
    values.getValuesMClientes(4, 3, 3, 8);
  }

}
