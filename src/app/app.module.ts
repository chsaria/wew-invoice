import { CustomerManagementModule } from './customer-management/customer-management.module';
import { AuthService } from './shared/auth/auth.service';
import { UserManagementModule } from './user-management/user-management.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TenantManagementModule } from './tenant-management/tenant-management.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './Login/Login.component';
import { FormsModule } from '@angular/forms';
import { PositionManagementModule } from './position-management/position-management.module';
import { InvoiceManagementModule } from './invoice-management/invoice-management.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    TenantManagementModule,
    UserManagementModule,
    CustomerManagementModule,
<<<<<<< HEAD
    InvoiceManagementModule,
=======
    PositionManagementModule,
>>>>>>> f02b03805bcfa076d8c88e5152ba6e0d65d7efba
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
