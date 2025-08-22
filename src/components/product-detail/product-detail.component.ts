import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../models/product';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { } // Inject ActivatedRoute and ProductService

  product?: IProduct; // Initialize product object
  productId: number = 0; // Initialize productId

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('productId')); // Get productId from route parameters
    console.log(this.productId); // Log productId to verify integration
    this.product = this.productService.getProductById(this.productId); // Fetch product by ID from ProductService
  }
}
