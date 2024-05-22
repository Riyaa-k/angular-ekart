import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './product-list/search/search.component';
import { FormsModule } from '@angular/forms'; 
// import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ListComponent } from './product-list/list/list.component';
import { ProductComponent } from './product-list/list/product/product.component';
import { FilterComponent } from './product-list/list/filter/filter.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './product-list/featured-brands/featured-brands.component';
import { SetBackground } from './Custom directive/SetBackground.directive';
import { HighlightDirective } from './Custom directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ProductListComponent,
    SearchComponent,
    MainMenuComponent,
    ListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    SetBackground,
    HighlightDirective
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }