import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = [
    new Product(1,"1st item",2.99,3.0,"this is a tool for coding study",["electronic","software"]),
    new Product(2,"2nd item",2.99,3.5,"this is a tool for coding study",["electronic","software"]),
    new Product(3,"3rd item",2.99,3.5,"this is a tool for coding study",["electronic","software"]),
    new Product(4,"4th item",2.99,4.0,"this is a tool for coding study",["electronic","software"]),
    new Product(5,"5th item",2.99,3.0,"this is a tool for coding study",["electronic","software"]),
    new Product(6,"6yh item",2.99,2.0,"this is a tool for coding study",["electronic","software"])
  ];
  private comments: Comment[] = [
    new Comment(1,1,"2017.2.2","Andy",3,"nice"),
    new Comment(2,1,"2017.2.4","Andy",3,"nice"),
    new Comment(3,2,"2017.3.2","Andy",3,"nice"),
    new Comment(4,2,"2017.2.6","Andy",3,"nice"),
  ]

  constructor() { }
  getProducts(): Product[]{
    return this.products;
  }
  getProduct(id:number): Product{
    return this.products.find((product:Product)=>product.id==id);
  }
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id)
  }
//1,service add comments, then routing.ts file
}
export class Product {

  constructor(//6 params
    public id:number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public classification: Array<string>
  ){}//whole function
}
export class Comment {
  constructor(
    public id:number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ){}
}