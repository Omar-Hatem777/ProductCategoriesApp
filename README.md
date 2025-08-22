# ProductCategoriesApp

A simple Angular application that demonstrates core concepts of **dependency injection** and **routing**. The app allows users to browse product categories, view products under each category, and view product details using Angular's routing system.

## Features

- **Category List View**: Browse available product categories
- **Product List View**: View all products within a selected category
- **Product Detail View**: See detailed information about a specific product
- **Responsive Design**: Modern UI with Bootstrap styling
- **Active Navigation**: Visual feedback for current page/selection

## Technical Concepts Covered

### Dependency Injection
- **ProductService**: Injectable service with `@Injectable({ providedIn: 'root' })`
- **Service Injection**: Components inject the ProductService using constructor injection
- **Singleton Pattern**: Service is provided at root level for app-wide availability

### Routing
- **Route Configuration**: Defined routes with parameters for dynamic navigation
- **Router Outlet**: `<router-outlet>` in AppComponent for displaying routed components
- **Navigation**: `routerLink` and `routerLinkActive` for navigation and active state
- **Route Parameters**: Dynamic routing with `:categoryName` and `:productId` parameters

### Angular Directives
- **Structural Directives**: `*ngFor` for looping through categories and products
- **Conditional Rendering**: `*ngIf` for showing/hiding content based on conditions
- **Data Binding**: Interpolation `{{ }}` for displaying dynamic content

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone or download** this project to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd ProductCategoriesApp
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   ng serve
   ```

5. **Open your browser** and navigate to `http://localhost:4200`

## Usage Guide

### Navigation Flow

1. **Home/Categories Page** (`/category`)
   - View all available product categories
   - Click on any category card to see its products
   - Active category is highlighted

2. **Products Page** (`/category/:categoryName`)
   - View all products in the selected category
   - Each product shows name and price
   - Click "View product details" to see full product information
   - Use "Back to categories" button to return to category list

3. **Product Detail Page** (`/category/:categoryName/product/:productId`)
   - View complete product information including description
   - See product name, price, description, and category
   - Use "Back to Products" button to return to category products

### Available Categories
- Electronics
- Books
- Clothing
- Home Appliances
- Toys

### Sample Products
Each category contains multiple products with realistic data including:
- Product names and descriptions
- Pricing information
- Category classification

## Project Structure

```
src/
├── app/
│   ├── app.component.*          # Main app component with router-outlet
│   ├── app.routes.ts           # Route configuration
│   └── app.config.ts           # App configuration
├── components/
│   ├── category-list/          # Category listing component
│   ├── product-list/           # Product listing component
│   ├── product-detail/         # Product detail component
│   └── not-found/              # 404 error component
├── models/
│   └── product.ts              # Product interface definition
├── services/
│   └── product.service.ts      # Injectable service for product data
└── styles.css                  # Global styles
```

## Route Configuration

```typescript
const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:categoryName', component: ProductListComponent },
  { path: 'category/:categoryName/product/:productId', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent }
];
```
```

## Data Model

```typescript
interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}
```

## Available Scripts

- `ng serve` - Start development server
- `ng build` - Build the project for production
- `ng test` - Run unit tests
- `ng e2e` - Run end-to-end tests

## Technologies Used

- **Angular 18** - Frontend framework
- **TypeScript** - Programming language
- **Bootstrap 5** - CSS framework for styling
- **FontAwesome** - Icon library
- **Angular Router** - Client-side routing

## Learning Objectives

This application demonstrates:
- How to create and use injectable services
- Implementing Angular routing with parameters
- Using structural directives for dynamic content
- Building a multi-page application with navigation
- Managing component communication through services
- Implementing responsive design with Bootstrap

## Troubleshooting

If you encounter any issues:

1. **Port already in use**: Try `ng serve --port 4201`
2. **Dependencies not found**: Run `npm install` again
3. **Build errors**: Check TypeScript compilation with `ng build`
4. **Routing issues**: Ensure all route parameters are properly handled

## Contributing

This is a learning project demonstrating Angular concepts. Feel free to experiment with the code and add new features to enhance your understanding of Angular development.
