import { Component, signal } from '@angular/core';
import { ProductService } from '../Services/products';
import { Product } from '../model/prodect.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  products = signal<Product[]>([]);

  filteredProducts = signal<Product[]>([])

  loading = signal(false);

  searchText = '';

  category = '';

  status = '';

  constructor(private service: ProductService) { }

  ngOnInit() {

    this.loading.set(true);

    this.service.getProducts()
      .pipe(
        finalize(() => this.loading.set(false))
      )
      .subscribe((res: any) => {

        this.products.set(res.products);

        this.filteredProducts.set(res.products);
        console.log(res.products)
        console.log(this.filteredProducts());

      });

  }

  search(value: string) {
    this.searchText = value;
    this.applyFilters()
  }

  changeCategory(category: string) {
    this.category = category;
    this.applyFilters()
  }

  changeStatus(status: string) {
    this.status = status;
    this.applyFilters()
  }

  private applyFilters(): void {
    this.filteredProducts.set(
      this.products().filter((product: Product) => {
        const matchedSearch = this.searchText === '' ||
          product.title.toLowerCase().includes(this.searchText.toLowerCase())

        const matchedCategory =
          this.category === '' ||
          product.category === this.category

        const matchedStatus =
          this.status === '' ||
          product.availabilityStatus === this.status

        return matchedSearch && matchedCategory && matchedStatus
      })
    )
  }

  sortProducts() {

    this.filteredProducts.set(
      this.filteredProducts().sort((a, b) => a.price - b.price)
    )

  }

}