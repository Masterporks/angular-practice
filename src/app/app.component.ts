import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDA Front-End practice';
  toShow = true;

  fruits = ["apple", "banana", "strawberry", "Pineapple"];

  doggies = ["Jack", "Villu", "Bark", "Peter" ];



  showAlertBox() {
    alert("Woof-Woof");
  }



}
