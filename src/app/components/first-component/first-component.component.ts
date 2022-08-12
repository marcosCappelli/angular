import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Marcos";
  age: number = 55;
  job = "Dev FrontEnd";
  hobbies = ["Ler", "Nadar", "Pedalar"];
  car = {
    name: "Eco Sport",
    color: "Preta",
    year: 2013
  }

  constructor() { }

  ngOnInit(): void {
  }

}
