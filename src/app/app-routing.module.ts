import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './additional/cart/cart.component';
import { CheckoutComponent } from './additional/checkout/checkout.component';
import { CustomerServiceComponent } from './additional/customer-service/customer-service.component';
import { DepartmentsComponent } from './additional/departments/departments.component';
import { DiscoverAmazonComponent } from './additional/discover-amazon/discover-amazon.component';
import { HomeComponent } from './additional/home/home.component';
import { SearchResultsComponent } from './additional/search-results/search-results.component';
import { TopSellersComponent } from './additional/top-sellers/top-sellers.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ErrorNotFoundComponent } from './error/error-not-found/error-not-found.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'customer-service', component: CustomerServiceComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'discover-amazon', component: DiscoverAmazonComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'top-sellers', component: TopSellersComponent },
  // { path: 'product', loadChildren: './product.module' },
  { path: 'product/listing', component: ProductListingComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/edit/:id', component: ProductAddComponent },
  { path: 'product/details/:id', component: ProductDetailsComponent },
  // Seller
  { path: 'seller/add', component: SellerAddComponent },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class CustomAppRoutingModule {}
