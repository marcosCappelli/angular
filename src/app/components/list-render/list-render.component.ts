import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] =  [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 5 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 10,
  };

  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal...")
    this.animals = this.listService.remove(this.animals, animal);
  }

}
