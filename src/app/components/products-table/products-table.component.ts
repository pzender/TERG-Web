import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor() { }
  @Input() data: Observable<Product[]> = of([])

  ngOnInit(): void {

  }

}
