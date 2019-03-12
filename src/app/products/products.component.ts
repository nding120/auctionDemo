import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { Product, ProductService } from '../share/product.service';//auto added
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  private products: Product[];
  //private products: Array<Product> 
  //3rd service step: declare a var and store info "class ProductsComponent",<Product> is type, defined in which file, it will auto added
  private imgUrl='http://placehold.it/320*150';

  private keyword: string;
  private titleFilter: FormControl=new FormControl();
  //这一步相当于：在控制器里声明了form-control的属性，和title-filter，这样在html文件里用[form-control]可以data bind
  constructor(private productService: ProductService) { 
    this.titleFilter.valueChanges
    .debounceTime(500)
    .subscribe(
      value => this.keyword=value
    )
  }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
