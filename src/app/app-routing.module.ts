import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:productId',component:ProductDetailComponent}
  //'product/:productTitle'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//在主模块app.module里用for-root注入路由，在子模块用for-child注入路由
  exports: [RouterModule]
})
export class AppRoutingModule { }
