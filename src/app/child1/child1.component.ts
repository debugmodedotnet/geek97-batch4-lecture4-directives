import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
