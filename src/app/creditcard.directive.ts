import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditcard]'
})
export class CreditcardDirective {

  constructor(private el : ElementRef) {

    console.log(this.el);
   }

   @HostListener('input',['$event']) onkeydown(event:KeyboardEvent){
       //console.log(event);
       // have to write your javascript 

       const input = event.target as HTMLInputElement;

       let trimmed = input.value.replace(/\s+/g, '');
       if (trimmed.length > 16) {
           trimmed = trimmed.substr(0, 16);
       }
   
       let numbers = [];
       for (let i = 0; i < trimmed.length; i += 4) {
           numbers.push(trimmed.substr(i, 4));
       }
   
       input.value = numbers.join(' ');
   
   }

  // @HostListener('keypress') onkeydown(event:KeyboardEvent){
  //   console.log(event);
  //  }

}


// @Input()
// @Output() EventEmmiter 
// You need to use public properties/functions of child component on the
// template of parent component  - #abc Temp Ref Variable 
// You need to use public properties/functions of child component on the
// class of parent component  - []
// you need to pass HTML from parent component to child component 
// Data between unrelated components - service with observables 