import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class Child2Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}


// Directives 

// 1. structural directives - *NgForOf, *ngIf 

// <div *ngFor="let i of product">

// 2. attribute directives 

// fooheight =100 ; - <button fooheight 

// 3. components 

