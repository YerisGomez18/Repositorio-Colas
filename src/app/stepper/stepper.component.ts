import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';
import { KClientesComponent } from '../k-clientes/k-clientes.component';
import { MClientesComponent } from '../m-clientes/m-clientes.component';
import { MasServidoresClientesComponent } from '../mas-servidores-clientes/mas-servidores-clientes.component';
import { ResulMasServidoresComponent } from '../resul-mas-servidores/resul-mas-servidores.component';
import { ResultadoKClientesComponent } from '../resultado-k-clientes/resultado-k-clientes.component';
import { ResultadoMClientesComponent } from '../resultado-m-clientes/resultado-m-clientes.component';
import { ResultadoUnifilaComponent } from '../resultado-unifila/resultado-unifila.component';
import { UnifilaComponent } from '../unifila/unifila.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }

  dummyComponent = UnifilaComponent;
  dummyComponent2 = ResultadoUnifilaComponent;

  assignComponent(component:string){
    if(component === 'uni'){
      this.dummyComponent = UnifilaComponent;
      this.dummyComponent2 = ResultadoUnifilaComponent;
    } else if (component === 'msercli'){
      this.dummyComponent = MasServidoresClientesComponent;
      this.dummyComponent2 = ResulMasServidoresComponent;
    } else if (component === 'kcli'){
      this.dummyComponent = KClientesComponent;
      this.dummyComponent2 = ResultadoKClientesComponent;
    } else{
      this.dummyComponent = MClientesComponent;
      this.dummyComponent2 = ResultadoMClientesComponent
    }
  }

}
