import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiariosComponent } from './pages/beneficiarios/beneficiarios.component';
import { PagamentosComponent } from './pages/pagamentos/pagamentos.component';
import { SaquesComponent } from './pages/saques/saques.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import {CalendarModule} from 'primeng/calendar';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiariosComponent,
    PagamentosComponent,
    SaquesComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    TableModule,
    PaginatorModule,
    HttpClientModule,
    InputTextModule,
    CalendarModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
