import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter } from 'rxjs';

@Component({
  selector: 'app-equation',
  standalone: false,
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css'
})

export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, 
  [MathValidators.addition('answer','a','b')]
);

  get a(){
    return this.mathForm.value.a;

  }get b(){
    return this.mathForm.value.b;
  }

ngOnInit(){

  this.mathForm.statusChanges.pipe(
    filter(value => value === 'VALID'),
    delay(200)
  ).subscribe((value) => {
    this.mathForm.setValue({
      a:this.randomNumber(),
      b:this.randomNumber(),
      answer:''
    });
  });

}

  randomNumber(){
    return Math.floor(Math.random()*10);
  }


}
