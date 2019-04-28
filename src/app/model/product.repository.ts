import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  // init a observer of the taken StaticDataSource
  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  // get products by category, and null category allowed
  getProducts(category: string = null): Product[] {
    return this.products
      .filter(p => category == null || category == p.category);
  }

  // get products by id, and null id not allowed
  getProduct(id: number): Product {
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
