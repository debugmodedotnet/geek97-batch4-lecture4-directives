import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecture4';
  color = 'green'; 

  divEnter(){
    this.color ='blue';
  }
  divLeave(){
    this.color ='green';
  }
}
