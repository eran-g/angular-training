import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson [] = [
    new SalesPerson("fn1", "ln1", "em1", 100),
    new SalesPerson("fn2", "ln2", "em2", 200),
    new SalesPerson("fn3", "ln3", "em3", 300),
    new SalesPerson("fn4", "ln4", "em4", 400)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
