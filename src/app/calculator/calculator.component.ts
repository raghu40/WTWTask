import { Component, ViewChild } from '@angular/core';
import { CalculationResult } from '../model/calculation-result';
import { CalculationService } from '../calculation.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  mainLimit!: number;
  mainRetention!: number;
  executionType: string = '';
  calculationResults:CalculationResult[] = [];
  loading:boolean = false;
  @ViewChild('calculateForm')
  calculateForm!: NgForm;
  

  constructor(private calculateserive:CalculationService) {}

  calculationForm(data:NgForm){
    this.loading = true
    this.calculateserive.calculate().subscribe(data => {
      this.calculationResults = data;
      this.loading = false;
      this.calculateForm.reset()
    })
  }

}
