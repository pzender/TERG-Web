import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MAX_PRICE, Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]> = of([]);
  public MAX_PRICE = MAX_PRICE;
  public filters = {
    limit: 10,
    offset: 0,
    priceFrom: 0,
    priceTo: MAX_PRICE,
    name: ''  
  }

  setName(newName: string) {
    this.filters.name = newName;
    this.updateData()
  }

  setPriceFrom(newPriceFrom: string) {
    this.filters.priceFrom = parseFloat(newPriceFrom);
    this.updateData()
  }

  setPriceTo(newPriceTo: string) {
    this.filters.priceTo = parseFloat(newPriceTo);
    this.updateData()
  }


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.updateData()
  }

  updateData(): void {
    this.products$ = this.productsService.getProducts(
      this.filters.limit, this.filters.offset, this.filters.name, this.filters.priceFrom, this.filters.priceTo
    );
  }

  addProduct(): void {
    console.log("add")
  }
}
