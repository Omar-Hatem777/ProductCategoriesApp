import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { } // Inject ActivatedRoute and ProductService

  products: IProduct[] = []; // Initialize products array
  category: string = '';

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get('categoryName') || ''; // Get categoryName from route parameters
    console.log(this.category); // Log category to verify integration
    this.products = this.productService.getProductsByCategory(this.category);
    console.log(this.products); // Log products to verify integration
  }
}
