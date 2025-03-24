import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appHighLightAnswer]',
  standalone: false
})
export class HighLightAnswerDirective {

  constructor(private el: ElementRef, private controlName: NgControl) {
  }

  ngOnInit(){
    console.log(this.controlName.control?.parent)
  }
    
}


