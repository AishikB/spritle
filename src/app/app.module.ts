import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {HomeService} from './pages/home/home.service';
import {LoginService} from './pages/login/login.service';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfirmComponent } from './common/confirm/confirm.component';
import {MatTabsModule} from '@angular/material/tabs';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  { path: 'home', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule
  //  RouterModule 
  ],
  providers: [
    HomeService,
    LoginService
  ],
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
