import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products : Product[] = []

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe( data=>{
      this.products = data
    })
  }



}
