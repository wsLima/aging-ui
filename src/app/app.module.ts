import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiariosComponent } from './beneficiarios/beneficiarios.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { SaquesComponent } from './saques/saques.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiariosComponent,
    PagamentosComponent,
    SaquesComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
