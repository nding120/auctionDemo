import { Component, OnInit } from '@angular/core';
import { Product, ProductService,Comment } from '../share/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //productTitle:string;
  product: Product; //type is 'Product' 自动引入出现这个type的文件，就是product.service
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }// ????

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params['productId'];
    // this.productTitle=this.routeInfo.snapshot.params['prodTitle'];
    this.product=this.productService.getProduct(productId);
    //引入service中的func时，之前有param，这里也要引入param，如productId
    this.comments=this.productService.getCommentsForProductId(productId);

  }

}
