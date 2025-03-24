import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
@Component({
  selector: 'app-equation',
  standalone: false,
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css'
})
export class EquationComponent {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, 
  [MathValidators.addition]
);

  get a(){
    return this.mathForm.value.a;

  }get b(){
    return this.mathForm.value.b;
  }



  randomNumber(){
    return Math.floor(Math.random()*10);
  }


}
