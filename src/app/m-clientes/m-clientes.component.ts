import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-m-clientes',
  templateUrl: './m-clientes.component.html',
  styleUrls: ['./m-clientes.component.css']
})
export class MClientesComponent implements OnInit {

  ngOnInit(): void {
    let values = new getValues();
    values.getValuesMClientes(4, 3, 3, 4);
  }

}
