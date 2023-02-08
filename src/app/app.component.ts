import {Component, OnInit} from '@angular/core';
import {Dog} from "./shared/models/dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SDA Front-End practice';
  toShow = true;

  fruits = ["apple", "banana", "strawberry", "Pineapple"];
  doggies: Dog[] = [];
  dogNames: string[] = ['Caesar', 'Scooby', 'Shadow'];
  dogTitle = 'List of dogs';
  fetchDoggos():Dog[]{
    let doggos: Dog[] = [];
    doggos.push(new Dog('Jack', 'Dober', 'Runs faster'))
    doggos.push(new Dog('Julie', 'German Shepperd', 'Eats well'))

    return doggos;
  }
  doggies1 = ["Jack", "Villu", "Bark", "Peter" ];



  showAlertBox() {
    alert("Woof-Woof");
  }

  ngOnInit(): void {
    this.doggies = this.fetchDoggos();
  }

  addDog() {
    let dogName = this.dogNames.at(Math.floor(Math.random() * this.dogNames.length));
    // @ts-ignore
    this.doggies.push(new Dog(dogName, 'Dalmian', 'Barks louder'))
  }


}
