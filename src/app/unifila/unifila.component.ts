import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-unifila',
  templateUrl: './unifila.component.html',
  styleUrls: ['./unifila.component.css']
})
export class UnifilaComponent implements OnInit {
  
  ngOnInit(): void {
    let values = new getValues();

    values.getValuesUnfila(4, 4, 3);
  }

}
