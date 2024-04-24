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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ProductListComponent,
    SearchComponent,
    MainMenuComponent,
    ListComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }