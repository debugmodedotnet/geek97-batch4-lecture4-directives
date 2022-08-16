import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  @HostBinding('style.border') border? : string; 
  constructor(private el : ElementRef,private render : Renderer2) { 

  }

  @HostListener('mouseenter') onMouseenter(){
     this.changeBgcolor('red');
     this.border = "5px solid green";
  }
  @HostListener('mouseleave') onMousLeave(){
     this.changeBgcolor('black');
     this.border = "";
  }



  changeBgcolor(color:string){

    this.render.setStyle(this.el.nativeElement,'color',color);
  }

}

// ng g d changecolor
