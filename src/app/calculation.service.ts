import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { CalculationResult } from './model/calculation-result';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  calculate(): Observable<CalculationResult[]> {
    //return Mock-up data
    return of([
      { referenceDate: '12/03/2024', benchmark1: 22.3, benchmark2: 25 },
      { referenceDate: '11/03/2024', benchmark1: 21.5, benchmark2: 24 },
      { referenceDate: '11/03/2022', benchmark1: 21.46, benchmark2: 22.4 },
      { referenceDate: '12/19/2021', benchmark1: 11.06, benchmark2: 1.4 },
      { referenceDate: '11/28/2019', benchmark1: 45.06, benchmark2: 23.4 },
      { referenceDate: '08/03/2017', benchmark1: 16.23, benchmark2: 31.4 },
      { referenceDate: '02/13/2017', benchmark1: 34.53, benchmark2: 60.42 },
      
    ]).pipe(delay(3000));
  }
}
