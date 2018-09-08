import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { AuthConfig } from './auth-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JsonInterceptorService } from './shared/services/json-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OrderComponent,
    ProductComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    appRoutes,
    Ng2UiAuthModule.forRoot(AuthConfig)
  ],
  providers: [JsonInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }