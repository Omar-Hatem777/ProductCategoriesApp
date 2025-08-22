import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from "@angular/router";
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  constructor(private productService: ProductService) { } // Inject product service

  categories: string[] = []; // Initialize categories array
  
  ngOnInit(): void {
    console.log(this.productService.getCategories()); // Log products to verify integration
    this.categories = this.productService.getCategories(); // Fetch categories from the service
  }
}
