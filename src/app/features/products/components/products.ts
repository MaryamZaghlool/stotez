import { Component } from '@angular/core';
import { ProductService } from '../Services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  products: any[] = [];

  filteredProducts: any[] = [];

  loading = false;

  searchText = '';

  category = '';

  status = '';

  constructor(private service: ProductService) { }

  ngOnInit() {

    // this.loading = true;

    this.service.getProducts().subscribe((res: any) => {

      this.loading = false;

      this.products = res.products;

      this.filteredProducts = [...res.products];
      console.log(res.products)
      console.log(this.filteredProducts);

    });

  }

  search(value: string) {

    this.searchText = value;

    if (this.searchText != '') {

      this.filteredProducts = this.products.filter((x: any) => {

        if (x.title.toLowerCase().includes(this.searchText.toLowerCase())) {

          return true;

        }

        else {

          return false;

        }

      });

    }

    else {

      this.filteredProducts = this.products;

    }

    if (this.category != '') {

      this.filteredProducts = this.filteredProducts.filter((x: any) => {

        if (x.category == this.category) {

          return true;

        }

        else {

          return false;

        }

      });

    }

    if (this.status != '') {

      this.filteredProducts = this.filteredProducts.filter((x: any) => {

        if (x.availabilityStatus == this.status) {

          return true;

        }

        else {

          return false;

        }

      });

    }

  }

  changeCategory(category: string) {

    this.category = category;

    if (this.searchText != '') {

      this.filteredProducts = this.products.filter((x: any) => {

        if (x.title.toLowerCase().includes(this.searchText.toLowerCase())) {

          return true;

        }

        else {

          return false;

        }

      });

    }

    else {

      this.filteredProducts = this.products;

    }

    if (this.category != '') {

      this.filteredProducts = this.filteredProducts.filter((x: any) => {

        if (x.category == this.category) {

          return true;

        }

        else {

          return false;

        }

      });

    }

    if (this.status != '') {

      this.filteredProducts = this.filteredProducts.filter((x: any) => {

        if (x.availabilityStatus == this.status) {

          return true;

        }

        else {

          return false;

        }

      });

    }

  }

  changeStatus(status: string) {

    this.status = status;

    if (this.searchText != '') {

      this.filteredProducts = this.products.filter((x: any) => {

        if (x.title.toLowerCase().includes(this.searchText.toLowerCase())) {

          return true;

        }

        else {

          return false;

        }

      });

    }

    else {

      this.filteredProducts = this.products;

    }

    if (this.category != '') {

      this.filteredProducts = this.filteredProducts.filter((x: any) => {

        if (x.category == this.category) {

          return true;

        }

        else {

          return false;

        }

      });

    }

    if (this.status != '') {

      this.filteredProducts = this.filteredProducts.filter((x: any) => {

        if (x.availabilityStatus == this.status) {

          return true;

        }

        else {

          return false;

        }

      });

    }

  }

  sortProducts() {

    this.filteredProducts.sort((a: any, b: any) => {

      if (a.price > b.price) {

        return 1;

      }

      else if (a.price < b.price) {

        return -1;

      }

      else {

        return 0;

      }

    });

  }

}