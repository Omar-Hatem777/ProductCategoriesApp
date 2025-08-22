import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CategoryListComponent } from '../components/category-list/category-list.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

export const routes: Routes =
[
        { path: "", redirectTo: "category", pathMatch: "full" }, // Default route
    
        { path: "category", component: CategoryListComponent, title: "Category list" }, // Category list route
    
        { path: "category/:categoryName", component: ProductListComponent, title: "Products list" }, // Product list route ,: categoryName is a route parameter
    
        { path: "category/:categoryName/product/:productId", component: ProductDetailComponent, title: "Products detail" }, // Product detail route , : productId is a route parameter
    
        { path: "**", component: NotFoundComponent, title: 'Not Found' } // Not found route
    
];
