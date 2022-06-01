import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';

import {MatStepperModule} from '@angular/material/stepper';
import { UnifilaComponent } from './unifila/unifila.component';
import { MasServidoresClientesComponent } from './mas-servidores-clientes/mas-servidores-clientes.component';
import { KClientesComponent } from './k-clientes/k-clientes.component';
import { MClientesComponent } from './m-clientes/m-clientes.component';

import { FormsModule } from '@angular/forms';
import { ResultadoUnifilaComponent } from './resultado-unifila/resultado-unifila.component';
import { ResulMasServidoresComponent } from './resul-mas-servidores/resul-mas-servidores.component';
import { ResultadoMClientesComponent } from './resultado-m-clientes/resultado-m-clientes.component';
import { ResultadoKClientesComponent } from './resultado-k-clientes/resultado-k-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    UnifilaComponent,
    MasServidoresClientesComponent,
    KClientesComponent,
    MClientesComponent,
    ResultadoUnifilaComponent,
    ResulMasServidoresComponent,
    ResultadoMClientesComponent,
    ResultadoKClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule
  ],
  entryComponents: [UnifilaComponent, MasServidoresClientesComponent, KClientesComponent, MClientesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
