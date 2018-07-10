import { AdminComponent } from './components/admin/admin.components';
import { LoginComponent } from './components/login/login.component';
import { AuthguardService } from './services/authguard.service';
import { SessionService } from './services/session.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

const appRoutes = [
  {path: '', component: AdminComponent}, // ,canActivate: [AuthguardService]
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    SessionService,
    AuthguardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
