import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  @Output() added = new EventEmitter<any>();

  model: Product = {
    name: '',
    code: '',
    price: 0,
  };

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  public addProduct() {
    this.productsService.createProduct(this.model).subscribe(
      response => this.added.emit(response)
    )
  }

}
