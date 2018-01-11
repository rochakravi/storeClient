import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{Routes, RouterModule} from '@angular/router'


import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { GroceryComponent } from './components/grocery/grocery.component';

const routes : Routes =[

	{path :'',component :HomeComponent},
	{path :'home',component :HomeComponent},
	{path :'grocery',component :GroceryComponent},
	{path :'grocery/:item',component :GroceryComponent},
	{path :'**',component :HomeComponent},

]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
