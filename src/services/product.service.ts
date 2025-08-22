import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: IProduct[] = [
    {
      id: 1,
      name: 'Smartphone',
      price: 699,
      description: 'Latest model smartphone with high-end features.',
      category: 'Electronics',
    },

    {
      id: 2,
      name: 'Novel Book',
      price: 25,
      description: 'A gripping novel for avid readers.',
      category: 'Books',
    },

    {
      id: 3,
      name: 'Jeans',
      price: 50,
      description: 'Comfortable and stylish denim jeans.',
      category: 'Clothing',
    },

    {
      id: 4,
      name: 'Blender',
      price: 80,
      description: 'High-speed blender for smoothies and more.',
      category: 'Home Appliances',
    },

    {
      id: 5,
      name: 'Action Figure',
      price: 30,
      description: 'Collectible action figure for kids and adults.',
      category: 'Toys',
    },

    {
      id: 6,
      name: 'Wireless Headphones',
      price: 120,
      description: 'Noise-cancelling over-ear headphones with long battery life.',
      category: 'Electronics',
    },

    {
      id: 7,
      name: 'Cookbook',
      price: 35,
      description: 'A collection of easy and delicious recipes for home cooks.',
      category: 'Books',
    },

    {
      id: 8,
      name: 'T-Shirt',
      price: 20,
      description: 'Cotton T-shirt available in multiple colors and sizes.',
      category: 'Clothing',
    },

    {
      id: 9,
      name: 'Microwave Oven',
      price: 200,
      description: 'Compact microwave oven with multiple cooking presets.',
      category: 'Home Appliances',
    },

    {
      id: 10,
      name: 'Board Game',
      price: 45,
      description: 'Fun strategy game suitable for family and friends.',
      category: 'Toys',
    },

    {
      id: 11,
      name: 'Smartwatch',
      price: 250,
      description: 'Feature-rich smartwatch with health and fitness tracking.',
      category: 'Electronics',
    },

    {
      id: 12,
      name: 'Science Fiction Novel',
      price: 28,
      description: 'Bestselling sci-fi adventure with a gripping storyline.',
      category: 'Books',
    },

    {
      id: 13,
      name: 'Sneakers',
      price: 90,
      description: 'Lightweight sneakers perfect for everyday wear.',
      category: 'Clothing',
    },

    {
      id: 14,
      name: 'Air Fryer',
      price: 150,
      description: 'Cook your favorite meals with less oil and faster results.',
      category: 'Home Appliances',
    },

    {
      id: 15,
      name: 'Puzzle Set',
      price: 18,
      description: 'Challenging puzzle set with 1000 pieces.',
      category: 'Toys',
    },

    {
      id: 16,
      name: 'Laptop',
      price: 1200,
      description: 'Powerful laptop suitable for work and entertainment.',
      category: 'Electronics',
    },

    {
      id: 17,
      name: 'Biography Book',
      price: 32,
      description: 'Inspiring life story of a world-renowned entrepreneur.',
      category: 'Books',
    },

    {
      id: 18,
      name: 'Jacket',
      price: 110,
      description: 'Warm and stylish jacket for the winter season.',
      category: 'Clothing',
    },

    {
      id: 19,
      name: 'Vacuum Cleaner',
      price: 180,
      description: 'High-suction vacuum cleaner for deep cleaning.',
      category: 'Home Appliances',
    },

    {
      id: 20,
      name: 'Dollhouse',
      price: 75,
      description: 'Beautiful wooden dollhouse with furniture and accessories.',
      category: 'Toys',
    },

    {
      id: 21,
      name: 'Tablet',
      price: 450,
      description: 'Portable tablet with HD display and ample storage.',
      category: 'Electronics',
    },

    {
      id: 22,
      name: 'History Book',
      price: 27,
      description: 'Detailed historical account with maps and illustrations.',
      category: 'Books',
    },

    {
      id: 23,
      name: 'Formal Shirt',
      price: 40,
      description: 'Slim-fit formal shirt perfect for office wear.',
      category: 'Clothing',
    },

    {
      id: 24,
      name: 'Coffee Maker',
      price: 95,
      description: 'Automatic coffee machine for fresh brews anytime.',
      category: 'Home Appliances',
    },

    {
      id: 25,
      name: 'Remote Control Car',
      price: 60,
      description: 'Fast and durable RC car for indoor and outdoor fun.',
      category: 'Toys',
    } 

  ];


  getCategories(): string[] {
    const categories = this.products.map(product => product.category); // Extract categories from products
    return Array.from(new Set(categories)); // Return unique categories
  }

  getProductsByCategory(category: string): IProduct[] {
    return this.products.filter(product => product.category === category); // Filter products by category
  } 

  getProductById(id: number): IProduct | undefined 
  {
    return this.products.find(product => product.id === id); // Find product by ID
  }

}
