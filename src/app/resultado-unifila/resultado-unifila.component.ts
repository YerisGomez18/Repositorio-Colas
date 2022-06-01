import { Component, OnInit } from '@angular/core';
import { getValues } from 'src/getValues';

@Component({
  selector: 'app-resultado-unifila',
  templateUrl: './resultado-unifila.component.html',
  styleUrls: ['./resultado-unifila.component.css']
})
export class ResultadoUnifilaComponent {

  constructor() { }

  ngOnInit(): void {
    const data = new getValues();
    console.log(data)
  }
}
