import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { EducationComponent } from '../education/education.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor(){}
  
  @ViewChild('tableBox') tableBox: ElementRef;
  @ViewChild('calculatorBody') calculatorBody: ElementRef;
  calculatorExpanded: boolean;
  tableExpanded: boolean;
  output: number;
  public sortBy = 'name';
  public sortOrder = 'desc'; 
  public people = [
    {
      name: "Gustave",
      height: 172,
      age: 24,
      occupation: "Pierogi Chef"
    },
    {
      name: "Frederic",
      height: 195,
      age: 19,
      occupation: "Student"
    },
    {
      name: "Didier",
      height: 180,
      age: 18,
      occupation: "Athlete"
    },
    {
      name: "Luca",
      height: 155,
      age: 15,
      occupation: "Video Producer"
    },
    {
      name: "Ral",
      height: 170,
      age: 20,
      occupation: "Avocado Farmer"
    },
    {
      name: "Chadwick",
      height: 185,
      age: 18,
      occupation: "Decision Consultant"
    }
  ];

  sortTable() {
    const isInverse = this.sortOrder === 'desc';
    this.people.sort(this.activeSort(this.sortBy, isInverse));
  }
  sortColumn(event) {
    const target = event.currentTarget;
    this.sortBy = target.getAttribute('dataToSort');
    this.sortOrder = target.getAttribute('dataOrder');

    target.setAttribute('dataOrder', this.sortOrder === 'asce' ? 'desc' : 'asce');
    this.sortTable();
  }

  activeSort(property, inverse) {
    inverse = inverse ? -1 : 1;
    return function(a, b) {
      const x = isNaN(Number(a[property])) ? a[property].toLocaleLowerCase() : Number(a[property]);
      const y = isNaN(Number(b[property])) ? b[property].toLocaleLowerCase() : Number(b[property]);
      const result = (x < y) ? -1 : (x > y) ? 1 : 0;
      return result * inverse;
    };
  }

  toggleTableBox() {
    if (this.tableBox.nativeElement) {
      this.tableExpanded = !this.tableExpanded
    }
  };

  toggleCalculatorBody() {
    if (this.calculatorBody.nativeElement) {
      this.calculatorExpanded = !this.calculatorExpanded
    }
  };

  ngOnInit() {
  }

}
