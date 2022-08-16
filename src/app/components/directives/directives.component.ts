import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 20;
  font = 'Arial';
  color = 'Blue';
  padding = 2;

  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
