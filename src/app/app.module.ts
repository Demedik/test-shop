import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { reducersCategory, reducersCart } from './store/reducers';
import { ProductsEffects } from './store/effects';

import { environment } from '../environments/environment';

import { HeaderComponent } from './components/header/header.component';
import { MiniCartComponent } from './components/mini-cart/mini-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiniCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      category: reducersCategory,
      order: reducersCart
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ProductsEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
