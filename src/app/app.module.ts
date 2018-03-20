import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AccueilComponent } from './accueil/accueil.component';
import { ProblemeComponent } from './probleme/probleme.component';
import { RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';


<<<<<<< HEAD
=======


>>>>>>> f5bd1bc1264b1287a842576f07185da6d1f7856d
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
<<<<<<< HEAD
    ProblemeComponent,
    ProduitComponent
=======
    ProduitComponent,


>>>>>>> f5bd1bc1264b1287a842576f07185da6d1f7856d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
