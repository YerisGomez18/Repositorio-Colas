import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-mas-servidores-clientes',
  templateUrl: './mas-servidores-clientes.component.html',
  styleUrls: ['./mas-servidores-clientes.component.css']
})
export class MasServidoresClientesComponent implements OnInit {

  ngOnInit(): void {

    let values = new getValues();
    values.getValuesMMInf(4, 3);
  }

}
